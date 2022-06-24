const express = require("express");
const db = require("../db");

const router = express.Router()

router.get("/", (req, res) => {
    db.getMovies().then(movies => {
        res.json(movies)
    }).catch(err => {
        console.log(err)
        res.setStatus(500).json({error: "Problem !"})
    })
})

module.exports = router;
  
