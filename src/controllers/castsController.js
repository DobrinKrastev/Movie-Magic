const router = require("express").Router();


router.get("/cast/create",(req,res)=>{
res.render("casts/cast-create");
});

module.exports = router;