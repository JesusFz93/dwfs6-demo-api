const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hola como estas?");
});

app.get("/query", (req, res) => {
  res.json({
    nombre: req.query.nombre,
    apellido: req.query.apellido,
  });
});

app.get("/:nombre/:apellido", (req, res) => {
  res.json({
    messaje: req.params.nombre,
    apellido: req.params.apellido,
  });

  console.log("Respuesta enviada");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT);
});
