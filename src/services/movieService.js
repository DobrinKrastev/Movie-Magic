const movies=[
    { title: 'Jungle Cuise',
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
 movies.push(movieData);
}

