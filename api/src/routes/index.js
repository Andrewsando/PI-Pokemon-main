const { Router } = require("express");
const { getAll } = require("../controllers/getAll.js");
const { getById } = require("../controllers/getById");
const getByName = require("../controllers/getByName.js");
const { postearEnDB } = require("../controllers/postearEnDB");
const { getTypes } = require("../controllers/getTypes.js");

const router = Router();

router.get("/pokemons", async (req, res) => {
  console.log("oli");
  if (!req.query.name) {
    try {
      console.log("acaaa 1");
      const traeTodo = await getAll();

      return res.json(traeTodo);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    console.log("acaaa 2");
    const { name } = req.query;
    const resultado = await getByName(name);
    console.log("ress", resultado);
    return res.status(202).json(resultado);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

router.get("/pokemons/type", async (req, res) => {
  try {
    console.log("acaaa 3");
    const arrayCreated = await getTypes(); //arreglo
    return res.status(200).json(arrayCreated);
  } catch (e) {
    return e.message.includes("elements")
      ? res.status(400).send(e.message)
      : res.status(404).send("Coudn't save the array");
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    console.log("acaaa 6");
    const { id } = req.params;
    console.log(id);
    const traePorId = await getById(id);
    return res.status(200).json(traePorId);
  } catch (e) {
    console.log("e", e);
    return res.status(404).send("Not found");
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    console.log("acaaa 7");
    const data = req.body;

    console.log("data", data);
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
    const creation = await postearEnDB(data);
    console.log("jhgju", creation);
    return res.status(200).json({ msg: "created", data: creation });
  } catch (e) {
    return res.status(404).send("It already exist");
  }
});

module.exports = router;
