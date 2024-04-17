const  mongoose  = require("mongoose");
const contactschema=new mongoose.Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    EmailAddress:{
        type:String,
        required:true
    },
    DOA:{
        type:Date,
        required:true
    },
    programmeName:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }


});
const Contact=new mongoose.model("Contactdata",contactschema);
module.exports=Contact;