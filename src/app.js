const express=require("express");
const path=require("path");
const session = require('express-session');
const hbs=require("hbs");
const Register=require("./models/registers"); 
const Contact=require("./models/contact");
const app=express();
require('./db/conn');
console.log(path.join(__dirname,"../public"));
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../Templates/views");
const partial_path=path.join(__dirname,"../Templates/partials");
app.use(express.urlencoded({extended:false}));
const port=process.env.PORT||3000;
app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',template_path);
app.get("/",(req,res)=>{
    res.render('index'); 
});
app.set("trust proxy",1);
app.use(session({
  secret: 'your_secret_key',
  
  resave: false,
    proxy:true,
    name:"Mycookie",
  saveUninitialized: false,
  cookie:{secure:true,samesite:"none",httpOnly:false}
}));
//app.get('/course-inner',(req,res)=>{
  //res.sendFile(path.join(__dirname,static_path,'course.html'));
//});
app.get("/",(req,res)=> {
    res.render("index");
});
app.get("/login",(req,res)=>{
    res.render('login');
});
app.post("/login",async(req,res)=>{
  try {
    const dataregister=new Register({
        Fullname:req.body.fullname,
        Username:req.body.user,

        Email:req.body.mail.toLowerCase(),
        Password:req.body.encrypt
    })
    const registered=await dataregister.save();
      // Assuming authentication is successful
      req.session.authenticated = true;
      // Other login logic...
  
    res.status(201).render("index");
     
  } catch (error) {
    res.status(400).send("wrong output");
  }        
  
});
app.post("/login1",async(req,res)=>{
    try {
     const useremail=req.body.Email;
     const pass=req.body.pass;
     const email=await Register.findOne({Email:useremail});
    if(email.Password===pass&&email.Email===useremail){
      req.session.email=useremail;
      req.session.password=pass;
        res.status(201).render("index");
    }
      
       
    } catch (error) {
      res.status(400).send("invalid login details");
    }        
    
  });
  //app.post("/forgot",(req,res)=>{
    
  //})
  app.post("/contact",async(req,res)=>{
    try {
     const firstname=req.body.Firstname;
     const lastname=req.body.Lastname;
     const mail1=req.body.EmailAddress.toLowerCase();
     const date=req.body.admit;
     const select=req.body.program;
     const msg=req.body.Message;
     const save=new Contact({
      Firstname:firstname,
      Lastname:lastname,
      EmailAddress:mail1,
      DOA:date,
      programmeName:select,
      Message:msg
     });
     const email=await Register.findOne({Email:mail1});
     const email1=await Contact.findOne({EmailAddress:mail1});
    if(email.Email===mail1){
      await save.save();
        res.status(201).render("thankyou");
    
    }
       
    } catch (error) {
      res.status(404).send("invalid contact details");
    }        
    
  });
  app.get("/About",(req,res)=> {
    res.render("About");
});
app.get("/Course",(req,res)=> {
  if (req.session.email){
  res.render("course");

}
else{
  res.render("login");
}
});
app.get("/python",(req,res)=> {
  res.render("python");
});
app.get("/java",(req,res)=> {
  res.render("java");
});
app.get("/mysql",(req,res)=> {
  res.render("mysq");
});
app.get("/Node",(req,res)=> {
  res.render("Node");
});
app.get("/php",(req,res)=> {
  res.render("php");
});
app.get("/laravel",(req,res)=> {
  res.render("laravel");
});
app.get("/c-plus",(req,res)=> {
  res.render("c++");
});
app.get("/jdbc",(req,res)=> {
  res.render("jdbc");
});
app.get("/jquery",(req,res)=> {
  res.render("jquery");
});
app.get("/plsql",(req,res)=> {
  res.render("plsql");
});
app.get("/seo",(req,res)=> {
  res.render("seo");
});
app.get("/c",(req,res)=> {
  res.render("c");
});
app.get("/contact",(req,res)=>{
  if (req.session.email){
  res.render("contact-1");
  }else{
    res.render("login");
  } 
});
app.get("/",(req,res)=>{
  res.render('index');
});
const course=['seo','python','java','jdbc','jquery','laravel','c','c-plus','mysq','Node','php','plsql'];
let i=0;
let found=false;

app.post("/search", (req, res) => {
  const searchname = req.body.searchname;
  if(req.session.email){
  for(i=0;i<course.length;i++){
  if(searchname.toLowerCase()===course[i]){
    res.render(searchname);
    found=true;
    break;
  }
  
  }
}
else{
  res.render("login");
}
  if(!found){ 
  
  // Render the course page based on the course name
  res.render("404");
  }
  
});
app.get("/course-inner",(req,res)=>{
  if(req.session.email){
  res.render("course-inner");
  }
  else{
    res.render("login");
  }
});

app.get("/Backend",(req,res)=>{
  res.render("Backend");
});
app.get("/university",(req,res)=>{
  res.render("university");
});
app.get("/classroom",(req,res)=>{
  res.render("classroom");
});

app.listen(port,()=>{
    console.log(`server running at ${port}`);
});
