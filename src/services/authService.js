const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

// TODO: CHECK IF USER EXIST;
exports.register = (userData) =>{
User.create(userData);
};

exports.login = async (email,password)=>{
    // GET USER FROM DB;
 const user = await User.findOne({ email });

    // CHECK IF USER AND PASSWORD ARE VALID;
  if(!user){
    throw new Error("User or Password doesn`t match");
  };

 const isValid = await bcrypt.compare(password, user.password);
 if(!isValid){
    throw new Error("User or Password doesn`t match");
 }
    // GENERATE JWT TOKKEN;
    const payload ={
        _id: user._id,
        email: user.email
    }
    const token = await jwt.sign(payload, SECRET,{expiresIn: "2h" })


    //RETURN TOKEN;
   return token
}