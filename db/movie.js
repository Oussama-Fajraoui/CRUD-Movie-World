const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27015');

let movieSchema = mongose.Schema({
    id: {
        type:Number,
        required:true
    },
    name: {
        type:String,
        required:true
    }
})

let Movie = mongose.model('Movie',movieSchema);
