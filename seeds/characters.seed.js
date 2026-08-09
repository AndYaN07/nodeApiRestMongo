const mongoose = require("mongoose");
const Character = require("../models/Character");

const characters = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    role: "Estudiante",
    patronus: "Ciervo",
    isStudent: true,
    isAlive: "SI",
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    role: "Estudiante",
    patronus: "Nutria",
    isStudent: true,
    isAlive: "SI",
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    role: "Estudiante",
    patronus: "Desconocido",
    isStudent: true,
    isAlive: "SI",
  },
  {
    name: "Severus Snape",
    house: "Slytherin",
    role: "Profesor",
    patronus: "Cierva",
    isStudent: false,
    isAlive: "NO",
  },
  {
    name: "Albus Dumbledore",
    house: "Gryffindor",
    role: "Director",
    patronus: "Fénix",
    isStudent: false,
    isAlive: "NO",
  },
  {
    name: "Lord Voldemort",
    house: "Ninguna",
    role: "Villano",
    patronus: "Ninguno",
    isStudent: false,
  },
];

const characterDocuments = characters.map((char) => new Character(char));

mongoose
  .connect("mongodb://localhost:27017/harry-potter-api")
  .then(async () => {
    const allCharacters = await Character.find();
    if (allCharacters.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => console.error(`Error eliminando datos: ${err}`))
  .then(async () => {
    await Character.insertMany(characterDocuments);
    console.log("Base de datos creada y poblada con éxito");
  })
  .catch((err) => console.log(`Error creando datos: ${err}`))
  .finally(() => mongoose.disconnect());
