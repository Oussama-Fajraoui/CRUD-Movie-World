const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27015');

let movieSchema = mongose.Schema({
    id: {
        type:Number,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    movie_url: {
        type:String,
        required:true
    }
})

let Movie = mongose.model('Movie',movieSchema);

let saveMovie = (data) => {
    let movie = new Movie ({
        id:data.id,
        image:data.image,
        movie_url:data.movie_url
    })
    let query = movie.save(err => {
        if(err){
            console.log(err)
        }
    })
    return query
}
let getAllMovies = () =>{
    return Movie.find({})
}

let searchMovie = (data)=>{
    return Movie.find({name:data})
}

let deleteMovie = (data)=>{
    Movie.deleteOne({name:data}).then(console.log('Movie deleted')).catch(err=>{
        console.log("error")
    })
    return getAllMovies()
}
module.exports.saveMovie = saveMovie
module.exports.getAllMovies = getAllMovies
module.exports.deleteMovie = deleteMovie
module.exports.searchMovie = searchMovie
