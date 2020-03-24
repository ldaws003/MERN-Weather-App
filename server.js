const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config({path: process.cwd()+".env"});
const helmet = require("helmet");

const app = express();

app.use(
   bodyParser.urlencoded({
      extended: false
   })
);

app.use(bodyParser.json());

app.use(helmet());

app.use(cors({
   origin: "http://localhost:3000",
   credentials: true,
   optionsSuccessStatus: 200
}));

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
});