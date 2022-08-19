const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({path: process.cwd()+ path.sep + ".env"});
const port = process.env.PORT;
const API_KEY = process.env.API_KEY;
const cors = require("cors");

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);

app.use(bodyParser.json());

app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}));


app.get('/search-weather', (req, res) => {
	axios.get('http://api.openweathermap.org/data/2.5/forecast', {
		params: {
			lat: req.query.lat,
			lon: req.query.lon,
			appid: API_KEY,
			units: "imperial"
		}
	})
	.then((response) => {
		res.status(200).json({
			...response.data
		});
	})
	.catch((err) => {
		res.status(500).json({msg: 'Sorry but there was an error. Please try again.'});
	});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});