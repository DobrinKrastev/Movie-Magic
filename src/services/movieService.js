// const movies=[
//     { 
//       _id: 1,
//       title: 'Jungle Cuise',
//       genre: 'Adventure',
//       director: 'Dweyne Johnson',
//       year: '2020',
//       imgUrl: '/img/jungle-cruise.jpeg',
//       rating: '5',
//       description: 'Dreaming about saving countless lives and having another adventure'
//     }
// ]
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
  const movie = Movie.findById(movieId).lean();
    return movie
  
}

exports.search = async (title,genre,year)=>{
  let movie = await Movie.find().lean();
  if(title){
   movie = movie.filter(x => x.title.toLowerCase().includes(title.toLowerCase))
  }

  if(genre){
   movie = movie.filter(x => x.genre.toLowerCase() === genre.toLowerCase());
  }
  
  if(year){
   movie = movie.filter(x=> x.year == year)
  }

  return movie
}
