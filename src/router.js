const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
const movieController = require("./controllers/movieController");
const castController = require("./controllers/castsController");
const authController = require("./controllers/authController")

router.use(movieController);
router.use(homeController);
router.use(castController);
router.use(authController);

router.get("*",(req,res)=>{
    res.render("404")
});

    module.exports = router;