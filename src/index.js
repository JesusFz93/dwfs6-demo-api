const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Obteniendo elementos",
  });
});

app.post("/", (req, res) => {
  res.json({
    msg: "Creando elementos",
  });
});

app.put("/", (req, res) => {
  res.json({
    msg: "Actualizando elementos",
  });
});

app.delete("/", (req, res) => {
  res.json({
    msg: "Eliminando elementos",
  });
});

app.get("/obtener", (req, res) => {
  fs.readFile("frutas.txt", "utf-8", (err, data) => {
    console.log(data);
    res.json({
      msg: "Frutas obtenidas!",
      frutas: data,
    });
  });
});

app.get("/actualizar", (req, res) => {
  let contenido = "Melon";

  fs.appendFile("frutas.txt", contenido, (err) => {
    res.json({
      msg: "Frutas actualizadas!",
    });
  });
});

app.get("/crear", (req, res) => {
  let contenido = "Sandia";

  fs.writeFile("frutas.txt", contenido, (err) => {
    res.json({
      msg: "Frutas creadas!",
    });
  });
});

app.get("/eliminar", (req, res) => {
  fs.unlink("frutas.txt", (err) => {
    res.json({
      msg: "Frutas eliminadas!",
    });
  });
});

// app.get("/", (req, res) => {
//   res.send("Hola como estas?");
// });

// app.get("/porquery", (req, res) => {
//   res.json({
//     nombre: req.query.nombre,
//     apellido: req.query.apellido,
//     apellido_materno: req.query.apellido_materno,
//   });
// });

// app.get("/personal", (req, res) => {
//   res.json({
//     nombre: req.body.nombre,
//     apellido: req.body.apellido,
//   });
// });

// app.get("/:nombre/:apellido/:apellido_materno", (req, res) => {
//   res.json({
//     messaje: req.params.nombre,
//     apellido: req.params.apellido,
//     apellido_materno: req.params.apellido_materno,
//   });

//   console.log("Respuesta enviada");
// });

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT);
});
