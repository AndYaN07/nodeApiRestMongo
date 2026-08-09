const express = require("express");
const { connect } = require("./utils/db");

// Importar el Router
const characterRoutes = require("./routes/character.routes");

connect();

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar el router para todo lo que empiece por /characters
app.use("/characters", characterRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la API de Harry Potter");
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
