import React from "react";

const Movies = (props) =>(
    <div className="movies">
        {props.movies.map((data,i)=>{
        return (   <div key ={i}>
                <h2 className="movie-name">{data.name}</h2>
                <center><img className="image" alt="" src={data.image_url} onClick={()=>{props.selectOne(i)}}></img></center>
                <center><button className="delete" onClick={()=>{props.deleteOne(i)}}>Delete</button></center>
            </div>
          
            )
        })}
    </div>
)

export default Movies