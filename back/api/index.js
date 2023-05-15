// server/index.js
const express = require("express");
const apiController = require('./apiController/index')

const PORT =  3002;

const app = express();
app.use(express.json());

const use =fn =>(req, res, next)=>
      Promise.resolve(fn(req,res,next)).catch(next);

app.post('/info/',use(apiController.getInfo))

app.listen(PORT, (req, res) => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});