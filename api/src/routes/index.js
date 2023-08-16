const { Router } = require("express");
const { getAll } = require("../controllers/getAll.js");
const { getById } = require("../controllers/getById");
const getByName = require("../controllers/getByName.js");
const { postOnDB } = require("../controllers/postOnDB");
const { getTypes } = require("../controllers/getTypes.js");

const router = Router();

router.get("/pokemons", async (req, res) => {
  if (!req.query.name) {
    try {
      const all = await getAll();
      return res.json(all);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    const { name } = req.query;
    const result = await getByName(name);
    return res.status(202).json(result);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

router.get("/pokemons/type", async (req, res) => {
  try {
    const arrayCreated = await getTypes();
    return res.status(200).json(arrayCreated);
  } catch (e) {
    return e.message.includes("elements")
      ? res.status(400).send(e.message)
      : res.status(404).send("Coudn't save the array");
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bringsID = await getById(id);
    return res.status(200).json(bringsID);
  } catch (e) {
    return res.status(404).send("Not found");
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    const data = req.body;
    if (
      !data ||
      !data.name ||
      !data.image ||
      data.name === "" ||
      data.image === "" ||
      !data.life ||
      !data.attack ||
      !data.defense
    ) {
      return res.status(400).send("Missing information");
    }
    const creation = await postOnDB(data);
    return res.status(200).json({ msg: "created", data: creation });
  } catch (e) {
    return res.status(404).send("It already exist");
  }
});

module.exports = router;
