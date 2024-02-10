const router = require("express").Router();
const movieService = require("../services/movieService");
const castService = require("../services/castService");
const { isAuth } = require("../middleware/authMiddleware")
router.get("/create", (req, res) => {
  res.render("create")
});

router.post("/create",isAuth, async (req, res) => {
  const movieData = req.body;

  try {
    await movieService.createMovie(movieData);
    res.redirect("/")
  } catch (error) {
    console.log(error.message);
    res.redirect("/create");
  }


});

router.get("/details/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getSingleMovie(movieId).lean();


  res.render("details", { movie })

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


module.exports = router