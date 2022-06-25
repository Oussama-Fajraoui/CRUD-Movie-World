import React from "react";


const OneMovie =({movie}) =>{
    return (<div>
        <h2 className="title">{movie.name}</h2>
        <div>
        <img className="oneimage" alt="" src={movie.image}></img>
        </div>
        <div className="box">
        <p>{movie.movie_url}</p>
        </div>
    </div>)
}

export default OneMovie;