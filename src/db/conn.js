const mongoose =require('mongoose');
//const username=process.env.MONGODB_USERNAME;
//const password=process.env.MONGODB_PASSWORD;

 mongoose.connect("mongodb+srv://tabir327:tabir123@cluster0.3gdyfvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connection established");
}).catch((error)=>{
    console.log(error);
    console.log("not establiahed");
});
