const router = require("express").Router();
const createMovie = require("../services/movieService")

router.get("/create", (req,res)=>{
    res.render("create")
});

router.post("/create", (req,res)=>{
   const movieData = req.body;
   createMovie(movieData)

  res.send("Movie should be created.")
});



module.exports = router