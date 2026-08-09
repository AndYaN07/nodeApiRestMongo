const express = require("express");
const { connect } = require("./utils/db");

// Conectar a la BBDD
connect();

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
