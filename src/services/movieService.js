const movies=[
    { 
      _id: 1,
      title: 'Jungle Cuise',
      genre: 'Adventure',
      director: 'Dweyne Johnson',
      date: '2020',
      imgUrl: '/img/jungle-cruise.jpeg',
      rate: '5',
      description: 'Dreaming about saving countless lives and having another adventure'
    }
]

 exports.getAllMovies=()=>{
  return movies.slice();
} 
 exports.createMovie = (movieData)=>{
  movieData._id= movies[movies.length -1]._id + 1;
 movies.push(movieData);
}

exports.getSingleMovie=(movieId)=>{
  const movie = movies.find(movie => movie._id == movieId);
 
    return movie
  
}

exports.search = (title,genre,year)=>{
  let movie = movies.slice();
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
