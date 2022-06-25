const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("isomorphic-fetch");
const movie = require('./database/movie');

app.use(express.json());
app.use(cors());

let port = 5000;

app.post('/api',(req,res)=> {
    movie.saveMovie(req.body);
    res.send('Test');
})

app.post('/api/d',(req,res)=>{
    movie.deleteMovie(req.body.name).then(data=>{
        res.send(data)
    })
})

app.post('/api/search',(req,res)=>{
    movie.searchMovie(req.body.name).then(data=>{
        res.send(data)
    })
})
app.get("/api",(req,res)=>{
    movie.getAllMovies().then(data=>{
        res.send(data)
    })
   })

app.listen(port,()=>{
console.log("listening on port 5000")
})