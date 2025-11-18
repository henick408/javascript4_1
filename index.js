'use strict';

const express = require('express');
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



//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});