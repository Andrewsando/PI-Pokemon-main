const { Router } = require("express");
const { getAll } = require("../controllers/getAll.js");
const { getById } = require("../controllers/getById");
const getByName = require("../controllers/getByName.js");
const { postearEnDB } = require("../controllers/postearEnDB");
const { guardarDB } = require("../controllers/guardarDB.js");

const router = Router();

router.get("/pokemons", async (req, res) => {

  if (!req.query.name) {
    try {
      console.log('acaaa 1')
      const traeTodo = await getAll();

      return res.json( traeTodo );
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
  try {
    console.log('acaaa 2')
    const { name } = req.query;
    const resultado = await getByName(name);
    console.log('ress',resultado);
    return res.status(202).json(resultado);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});


router.get("/pokemons/type", async (req, res) => {

  try {
    console.log('acaaa 3')
    const arrayCreated = await guardarDB(); //arreglo
    return res.status(200).json({ msg: "Array saved", data: arrayCreated });
  } catch (e) {
    return e.message.includes("elements")
    ? res.status(400).send(e.message)
    : res.status(404).send("Coudn't save the array");
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    console.log('acaaa 4')
    const { id } = req.params;
    const traePorId = await getById(id);
    return res.status(200).json(traePorId);
  } catch (e) {
    return res.status(404).send("Not found");
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    console.log('acaaa 5')
    const data = req.body;
    if (
      !data ||
      !data.id ||
      !data.name ||
      !data.image ||
      !data.life ||
      !data.attack ||
      !data.defense
    ) {
      return res.status(404).send("Missing information");
    }
    const creation = await postearEnDB(data);
    return res.status(200).json({ msg: "created", data: creation });
  } catch (e) {
    return res.status(404).send("It already exist");
  }
});

module.exports = router;
