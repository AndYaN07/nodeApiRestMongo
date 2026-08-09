const express = require("express");
const Character = require("../models/Character");

const router = express.Router();

// GET: Obtener todos los personajes
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error al obtener los personajes", details: err.message });
  }
});

// GET: Obtener personaje por ID
router.get("/id/:id", async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character)
      return res.status(404).json({ error: "Personaje no encontrado" });
    return res.status(200).json(character);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error al buscar por ID", details: err.message });
  }
});

// GET: Obtener personajes por Casa (Filtro personalizado)
router.get("/house/:house", async (req, res) => {
  try {
    const characters = await Character.find({ house: req.params.house });
    return res.status(200).json(characters);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error al filtrar por casa", details: err.message });
  }
});

// POST: Crear un nuevo personaje
router.post("/", async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Error al crear el personaje", details: err.message });
  }
});

// PUT: Modificar un personaje existente
router.put("/:id", async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }, // new: devuelve el modificado, runValidators: respeta el Schema
    );
    if (!updatedCharacter)
      return res
        .status(404)
        .json({ error: "Personaje no encontrado para actualizar" });
    return res.status(200).json(updatedCharacter);
  } catch (err) {
    return res.status(400).json({
      error: "Error al actualizar el personaje",
      details: err.message,
    });
  }
});

// DELETE: Eliminar un personaje
router.delete("/:id", async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    if (!deletedCharacter)
      return res
        .status(404)
        .json({ error: "Personaje no encontrado para eliminar" });
    return res
      .status(200)
      .json({ message: "Personaje eliminado correctamente", deletedCharacter });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error al eliminar el personaje", details: err.message });
  }
});

module.exports = router;
