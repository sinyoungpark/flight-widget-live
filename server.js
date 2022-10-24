
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 8000;
require("dotenv").config(); //api key

app.use(cors());

app.get("/flights", (req,res) => {

  const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
  };
  
  axios.request(options).then((response) => {
    res.json(response.data.slice(0,6));
  }).catch(function (error) {
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});