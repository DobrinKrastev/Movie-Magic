const router = require("express").Router();
const movieService = require("../services/movieService")

router.get("/create", (req,res)=>{
    res.render("create")
});

router.post("/create", async (req,res)=>{
   const movieData = req.body;
   
  try {
    await movieService.createMovie(movieData);
    res.redirect("/")
  } catch (error) {
    console.log(error.message);
    res.redirect("/create");
  }

 
});

router.get("/details/:movieId",(req,res)=>{
const movieId = req.params.movieId;
 const movie = movieService.getSingleMovie(movieId);
 console.log(movie)
 
    res.render("details",{ movie })

})


module.exports = router