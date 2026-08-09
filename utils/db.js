const mongoose = require("mongoose");

const urlDb = "mongodb://localhost:27017/harry-potter-api";

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log("Conectado con exito a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
};

module.exports = { connect };
