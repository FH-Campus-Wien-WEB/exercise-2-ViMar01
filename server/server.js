const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movieModel.movies))
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  const movie = req.params.imdbID;
  if (movie in movieModel.movies){
    res.send(movieModel.movies[movie]);
  } else {
    res.sendStatus(404) }
})

/*PUT endpoint, checks whether the movie sent by client already exists
  -if yes, then update movie
  -if not, create new movie */
app.put('/movies/:imdbID', function (req, res) {
  const movieID = req.params.imdbID;
  const newMovieData = req.body;
  
  if(movieID in movieModel.movies){
    const movie = movieModel.movies[movieID];
    
    movie.Title = newMovieData.Title;
    movie.Runtime = newMovieData.Runtime;
    movie.Released = newMovieData.Released;
    movie.Genres = newMovieData.Genres;
    movie.Metascore = newMovieData.Metascore;
    movie.imdbRating = newMovieData.imdbRating;
    movie.Plot = newMovieData.Plot;
    movie.Directors = newMovieData.Directors;
    movie.Writers = newMovieData.Writers;
    movie.Actors = newMovieData.Actors;
    movie.Poster = newMovieData.Poster;
    
    res.status(200).json(movie);
  
  } else {
    const newMovie = { imdbID: movieID};

    newMovie.Title = newMovieData.Title;
    newMovie.Runtime = newMovieData.Runtime;
    newMovie.Released = newMovieData.Released;
    newMovie.Genres = newMovieData.Genres;
    newMovie.Metascore = newMovieData.Metascore;
    newMovie.imdbRating = newMovieData.imdbRating;
    newMovie.Plot = newMovieData.Plot;
    newMovie.Directors = newMovieData.Directors;
    newMovie.Writers = newMovieData.Writers;
    newMovie.Actors = newMovieData.Actors;
    newMovie.Poster = newMovieData.Poster;

    movieModel.movies[movieID] = newMovie;

    res.status(201).json(newMovie);

  }
})
/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

