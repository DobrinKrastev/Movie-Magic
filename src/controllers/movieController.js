const router = require("express").Router();
const movieService = require("../services/movieService");
const castService = require("../services/castService");

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

router.get("/details/:movieId", async (req,res)=>{
const movieId = req.params.movieId;
 const movie = await movieService.getSingleMovie(movieId);
 
 
    res.render("details",{ movie })

});
router.get("/details/:movieId/attach", async (req,res)=>{
  const movie = await movieService.getSingleMovie(req.params.movieId);
  const cast = await castService.getAllCasts().lean();

    res.render("movie/attach",{ movie, cast })
});
router.post("/details/:movieId/attach", async (req,res)=>{
const castId = req.body.cast;
await movieService.attach(req.params.movieId, castId);


res.redirect("/")

});


module.exports = router