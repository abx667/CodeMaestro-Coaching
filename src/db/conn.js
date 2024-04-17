const mongoose =require('mongoose');
//const username=process.env.MONGODB_USERNAME;
//const password=process.env.MONGODB_PASSWORD;

 mongoose.connect("mongodb+srv://shreayas:shreayasd123@cluster0.xjxerxi.mongodb.net/registration-form").then(()=>{
    console.log("connection established");
}).catch((error)=>{
    console.log(error);
    console.log("not establiahed");
});
