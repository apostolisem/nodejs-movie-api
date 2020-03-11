const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    movieYear: {
        type: Number,
        required: true
    },
    movieID: {
        type: Number,
        required: true
    },
    moviePosterUrl: {
        type: String,
        required: true
    },
    imdbID: {
        type: String,
        required: false
    },
    imdbRate: {
        type: Number,
        required: false
    },
    trailerUrl: {
        type: String,
        required: false
    },
    movieGenre: {
        type: Array,
        required: false
    },
    movieDuration: {
        type: String,
        required: false
    },
    movieDescription: {
        type: String,
        required: false
    },
    movieActors: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Movie', movieSchema);