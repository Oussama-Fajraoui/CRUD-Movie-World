const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27015');

let movieSchema = mongose.Schema({})
