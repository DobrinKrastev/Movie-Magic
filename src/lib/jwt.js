const jwt = require("jsonwebtoken");

function sign(payload, sectetOrPrivateKey,options = {}){
 const promise = new Promise((resolve,reject)=>{
    jwt.sign(payload,sectetOrPrivateKey,options,(err,tokken)=>{
        if(err){
        return reject(err);
        }
        resolve(tokken);
    })
 })
 return promise
};


module.exports = {
    sign,
}