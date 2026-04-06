/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
const movies = {
   tt0133240: {
   "imdbID":"tt0133240",
   "Title":"Treasure Planet",
   "Released":"2002-11-29",
   "Runtime": 95,
   "Genres": ["Animation", "Action", "Adventure"],
   "Directors":["Ron Clements", "John Musker"],
   "Writers": ["Ron Clements", "John Musker", "Rob Edwards"],
   "Actors": ["Joseph Gordon-Levitt", "Emma Thompson", "Martin Short"],
   "Plot": "Jim Hawkins is a teenager who finds the map of a great treasure hidden by a space pirate. Together with some friends, he sets off in a large spaceship, shaped like a caravel, on his quest.",
   "Poster": "https://m.media-amazon.com/images/M/MV5BN2VjNjk5MTAtNDE3Ni00NjczLWFhN2EtNGQ1ZmZmOWRjZjIyXkEyXkFqcGc@._V1_SX300.jpg",
   "Metascore": 60,
   "imdbRating": 7.2
   },
   tt1446192: {
   "imdbID":"tt1446192",
   "Title":"Rise of the Guardians",
   "Released":"2012-11-21",
   "Runtime": 97,
   "Genres": ["Animation", "Action", "Adventure"],
   "Directors": ["Peter Ramsey"],
   "Writers": ["David Lindsay-Abaire", "William Joyce", "Chris Appelhans"],
   "Actors": ["Hugh Jackman", "Alec Baldwin", "Isla Fisher"],
   "Plot": "When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg",
   "Metascore": 58,
   "imdbRating": 7.2
   },
   tt4729430: {
   "imdbID":"tt4729430",
   "Title":"Klaus",
   "Released":"2019-11-15",
   "Runtime": 96,
   "Genres": ["Animation", "Adventure", "Comedy"],
   "Directors": ["Sergio Pablos", "Carlos Martínez López"],
   "Writers": ["Sergio Pablos", "Jim Mahoney", "Zach Lewis"],
   "Actors": ["Jason Schwartzman", "J.K. Simmons", "Rashida Jones"],
   "Plot": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BZDA4ODhlMzctNGRmYi00NmViLTkxZGYtZjRkNGQ5YzYwYWVlXkEyXkFqcGc@._V1_SX300.jpg",
   "Metascore": 65,
   "imdbRating": 8.2
   },
   tt5198068: {
   "imdbID":"tt5198068",
   "Title":"Wolfwalkers",
   "Released":"2020-11-13",
   "Runtime":103,
   "Genres":["Animation", "Action", "Adventure"],
   "Directors":["Tomm Moore", "Ross Stewart"],
   "Writers": ["Will Collins", "Tomm Moore", "Ross Stewart"],
   "Actors":["Honor Kneafsey", "Eva Whittaker", "Sean Bean"],
   "Plot":"A young apprentice hunter and her father journey to Ireland to help wipe out the last wolf pack. But everything changes when she befriends a free-spirited girl from a mysterious tribe rumored to transform into wolves by night.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BYzg3MjBkYmYtZjZkZS00YWVkLTk3YjMtNDBlMTVmNDZkZDJhXkEyXkFqcGc@._V1_SX300.jpg",
   "Metascore": 87,
   "imdbRating": 8.0
   }
}
module.exports.movies = movies;
console.log(module);