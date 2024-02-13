const mongoose = require("mongoose");

const castShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:5,
        match: /^[a-zA-Z0-9\s]+$/,
    },
    age:{
        type: Number,
        required: true,
        max:120,
        min:14,
    },
    born:{
        type: String,
        required: true,
        minLength:10,
        match: /^[a-zA-Z0-9\s]+$/,
    },
    nameInMovie:{
        type: String,
        required: true,
        minLength:5,
        match: /^[a-zA-Z0-9\s]+$/,
    },
    castImage:{
        type: String,
        required: true,
        match: /^http*s?/,
    },
   
   

});
const Cast = mongoose.model("Cast",castShema);
module.exports = Cast;

// · movie – ObjectId, ref Movie Mode