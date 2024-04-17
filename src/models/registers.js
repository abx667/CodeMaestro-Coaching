const  mongoose  = require("mongoose");

const userschema=new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true

    },
    Password:{
        type:String,
        required:true
    }

});



const Register=new mongoose.model("data",userschema);
module.exports=Register;

