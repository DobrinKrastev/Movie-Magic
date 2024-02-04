const router = require("express").Router();


router.get("/cast/create",(req,res)=>{
res.render("casts/cast-create");
});

router.post("/cast/create", (req,res)=>{

    const cast = req.body;
    console.log(cast);
    res.redirect("/")
})

module.exports = router;