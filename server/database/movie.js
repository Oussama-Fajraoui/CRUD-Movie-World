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

let save = (data) => {
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
