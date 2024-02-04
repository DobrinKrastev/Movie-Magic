const movies=[
    { 
      _id: 1,
      title: 'Jungle Cuise',
      genre: 'Adventure',
      director: 'Dweyne Johnson',
      year: '2020',
      imgUrl: '/img/jungle-cruise.jpeg',
      rating: '5',
      description: 'Dreaming about saving countless lives and having another adventure'
    }
]
const Movie = require("../models/Movie")

 exports.getAllMovies= ()=>{
 const allMovies =  Movie.find();
 return allMovies 
 
} 
 exports.createMovie = (movieData)=>{
  const result = Movie.create(movieData);
  return result
}

exports.getSingleMovie=(movieId)=>{
  const movie = movies.find(movie => movie._id == movieId);
 
    return movie
  
}

exports.search = (title,genre,year)=>{
  let movie = Movie.slice();
  if(title){
   movie = movie.filter(x => x.title.toLowerCase().includes(title))
  }

  if(genre){
   movie = movie.filter(x => x.genre.toLowerCase() === genre);
  }
  
  if(year){
   movie = movie.filter(x=> x.date === year)
  }

  return movie
}
