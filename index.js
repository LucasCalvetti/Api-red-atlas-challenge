const express = require("express");
const app = express();

// Definir una ruta de prueba
app.get("/api/saludo", (req, res) => {
    res.json({ mensaje: "¡Hola desde Express en Vercel!" });
});

// Exportar el módulo Express para que Vercel lo use
module.exports = app;
