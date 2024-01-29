const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
router.use(homeController);

const movieController = require("./controllers/movieController");
router.use(movieController)

    module.exports = router;