const router = require("express").Router();
const castService  = require("../services/castService")

router.get("/cast/create",(req,res)=>{
res.render("casts/cast-create");
});

router.post("/cast/create", async (req,res)=>{

    const castData = req.body;
    await castService.createCast(castData)
    res.redirect("/")
})

module.exports = router;