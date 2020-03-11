const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();  
        res.json(movies); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get one movie
router.get('/:id', getMovie, (req, res) => {
    res.json(res.movie);
});

// create one movie
router.post('/', async (req, res) => {
    const movie = new Movie({
        name: req.body.name,
        movieYear: req.body.movieYear,
        imdbID: req.body.imdbID,
        imdbRate: req.body.imdbRate,
        trailerUrl: req.body.trailerUrl,
        movieGenre: req.body.movieGenre,
        movieDuration: req.body.movieDuration,
        movieDescription: req.body.movieDescription,
        movieActors: req.body.movieActors
    });
    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update one movie
router.patch('/:id', getMovie, async (req, res) => {
    try {
    if (req.body.name != null) {
        res.movie.name = req.body.name;
    }
    if (req.body.movieYear != null) {
        res.movie.movieYear = req.body.movieYear;
    }
    if (req.body.imdbID != null) {
        res.movie.imdbID = req.body.imdbID;
    }
    if (req.body.imdbRate != null) {
        res.movie.imdbRate = req.body.imdbRate;
    }
    if (req.body.trailerUrl != null) {
        res.movie.trailerUrl = req.body.trailerUrl;
    }
    if (req.body.movieGenre != null) {
        res.movie.movieGenre = req.body.movieGenre;
    }
    if (req.body.movieDuration != null) {
        res.movie.movieDuration = req.body.movieDuration;
    }
    if (req.body.movieDescription != null) {
        res.movie.movieDescription = req.body.movieDescription;
    }
    if (req.body.movieActors != null) {
        res.movie.movieActors = req.body.movieActors;
    }
    
      const updatedMovie = await res.movie.save();
      res.json(updatedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

// delete one movie
router.delete('/:id', getMovie, async (req, res) => {
    try {
        await res.movie.remove();
        res.json({ message: 'Deleted'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

async function getMovie(req, res, next) {
    let movie;
    try {
        movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message: 'Cannot find movie' });
        }        
    } catch (error) {
        return res.status(500).json({message: error.message });
    }
    res.movie = movie;
    next();
}

module.exports = router;