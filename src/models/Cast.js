const mongoose = require("mongoose");

const castShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    born:{
        type: String,
        required: true,
    },
    nameInMovie:{
        type: String,
        required: true,
    },
    castImage:{
        type: String,
        required: true,
        //match: /^http*s?/,
    },
   
   

});
const Cast = mongoose.model("Cast",castShema);
module.exports = Cast;

// · movie – ObjectId, ref Movie Mode