const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invallid email adress"],
        minLength:[10,"Email should be minimum 10 letters long"],
    },
    password: {
        type: String,
        required: true,
        match:[/^[a-zA-Z0-9]+$/,"Invalid password"],
        minLength:[6,"Password should be minimum 10 letters long"],
    },
});

userSchema.pre("save", async function(){

   const hash = await bcrypt.hash(this.password,12);
   this.password = hash;
});

userSchema.virtual("rePassword")
.set(function(value){
    if(value !== this.password){
       throw new mongoose.MongooseError("Password doesn`t match");
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;