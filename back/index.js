const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../front/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
});