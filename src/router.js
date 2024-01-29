const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");


const movieController = require("./controllers/movieController");

router.use(movieController)
router.use(homeController);

    module.exports = router;