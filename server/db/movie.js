const connection  = require("./connection");

const getMovies=(db = connection) => {
    return db('movie').select()
}

module.exports = {getMovies}