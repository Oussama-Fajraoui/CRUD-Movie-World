import React from "react";

const Movie = ({movies}) =>(
    <div className="movie">
        {movies.map((data,i)=>{
        return (   <div key ={i}>
                <h2>{data.movie.label}</h2>
                <img alt="" src={data.movie.image}></img>
                <div>
                <ol className="list">
                    {data.movie.movie_url.map((movie_url,i)=>{
                        return(<li key ={i}>{movie_url}</li>)
       
                })}</ol>
                </div>
            </div>
            )
        })}
    </div>
)

export default Movie