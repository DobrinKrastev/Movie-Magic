const jwt = require("jsonwebtoken");
const util = require("util");

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

const verify = util.promisify(jwt.verify);


module.exports = {
    sign,
    verify,
}