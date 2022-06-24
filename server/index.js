const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("isomorphic-fetch");

app.use(express.json());
app.use(cors());

let port = 5000;

app.get("/api",(req,res)=>{
    let url ="https://api.edamam.com/search?q=meat&app_id=808d34b0&app_key=7feb9dd94ada98759c0d6cd4b92c5d3d";
    fetch(url).then(
        async (response) =>{
            let data = await response.json();
            res.send(data.hits)
        }
    )
   })

app.listen(port,()=>{
console.log("listening on port 5000")
})