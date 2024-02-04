const router = require("express").Router();
const movieService = require("../services/movieService");

router.get("/", async (req,res)=>{
   const movies = await movieService.getAllMovies().lean()

    res.render("home",{ movies })
    });


    router.get("/about",(req,res)=>{
        res.render("about")
    });
    

  

    router.get("/search",(req,res)=>{
        const {title, genre, year} = req.query
        const movies = movieService.search(title,genre,year)
        //const movies = movieService.getAllMovies()
        res.render("search", { movies })
    });
    



    module.exports = router;