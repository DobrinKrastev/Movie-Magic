const router = require("express").Router();
const movieService = require("../services/movieService");
const castService = require("../services/castService");
const { isAuth } = require("../middleware/authMiddleware")
router.get("/create", (req, res) => {
  res.render("create")
});

router.post("/create",isAuth, async (req, res) => {
  const movieData = req.body;
  const newMovie= {
    ...req.body,
    owner: req.user._id,
  };
  try {
    await movieService.createMovie(newMovie);
    res.redirect("/")
  } catch (error) {
    console.log(error.message);
    res.redirect("/create");
  }


});

router.get("/details/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getSingleMovie(movieId).lean();
  const isOwner = movie.owner == req.user?._id;
  


  res.render("details", { movie,isOwner})

});
router.get("/details/:movieId/attach",isAuth, async (req, res) => {
  const movie = await movieService.getSingleMovie(req.params.movieId).lean();
  const cast = await castService.getAllCasts().lean();

  res.render("movie/attach", { movie, cast })
});
router.post("/details/:movieId/attach",isAuth, async (req, res) => {
  const castId = req.body.cast;
  await movieService.attach(req.params.movieId, castId);


  res.redirect("/")

});
router.get("/details/:movieId/edit",isAuth, async (req, res) => {


  const movie = await movieService.getSingleMovie(req.params.movieId).lean();
  res.render("movie/edit", { movie })

});

router.get("/details/:movieId/delete",isAuth, async (req,res)=>{
 
  await movieService.delete(req.params.movieId);
  
  res.redirect("/")
})


module.exports = router