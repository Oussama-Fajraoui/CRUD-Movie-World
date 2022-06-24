const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("isomorphic-fetch");

app.use(express.json());
app.use(cors());

let port = 5000;

app.get("/api",(req,res)=>{
    let url ="https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1";
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