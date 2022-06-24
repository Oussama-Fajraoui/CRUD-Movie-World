const express = require("express");
const app = express();
// const movieSrc = require("../server/src") 

app.use(express.json());

app.use(express.static("./public"));

// app.use("api/movie",movieSrc);

module.exports = app