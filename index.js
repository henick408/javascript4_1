'use strict';

const express = require('express');
const { isUndefined } = require('util');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = Number(req.params.r);

  if(isNaN(r) || r <= 0){
    return res.status(400).json({error: "Musi być dodatnią liczbą"})
  }

  const result = {
    area: Math.PI * r * r,
    circumference: Math.PI * 2 * r
  }

  res.json(result); 
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  if(isNaN(width) || isNaN(height) || width <= 0 || height <= 0){
    return res.status(400).json({error: "Wartości boków muszą być dodatnie"})
  }
  
  const result = {
    area: width * height,
    perimeter: 2 * width + 2 * height
  }
  res.json(result);
});



app.get('/math/power/:base/:exponent', (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);
  const query = req.query;

  console.log(base);
  console.log(exponent);

  if(isNaN(base) || isNaN(exponent)){
    return res.status(400).json({error: "Proszę podać poprawne liczby."})
  }

  if(query.root == 'true' && base < 0){
    return res.status(400).json({error: "Uzyskanie pierwiastka z liczby ujemnej jest niemożliwe."});
  }

  let result = {
    result: Math.pow(base, exponent)
  }

  if(query.root == 'true'){
    result.root = Math.sqrt(base);
  }

  res.json(result);

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});