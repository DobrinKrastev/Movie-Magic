const router = require("express").Router();
const authService = require("../services/authService")
const { getErrorMessage, validate } = require('../utils/errorUtils');

router.get("/register", (req,res)=>{
    res.render("auth/register");

});

router.post("/register", async (req,res)=>{
    try {
        const userData = req.body;
   
        await authService.register(userData);
    
        res.redirect("/login")
    } catch (error) {

        res.render("auth/register",{error: error.message})
    }
  
})

router.get("/login", (req,res)=>{
res.render("auth/login");

});

router.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    try {
       const token = await authService.login(email,password);
       res.cookie("auth",token);
       res.redirect("/");

    } catch (error) {
        const message = getErrorMessage(error);

        res.status(400).render('auth/login', { error: message });
    }
   
  
    });
    router.get("/logout",(req,res)=>{
        res.clearCookie("auth");
        res.redirect("/");
    })

module.exports = router