const express= require("express");
//const { append } = require("express/lib/response");
const {register,login}=require("./controllers/auth.controller");
const usercontroller=require("./controllers/user.controller.js");
const connect = require("./config/db.js");
const abletopostcontroller=require("./controllers/abletopost.controller.js");
const app=express();
 app.use(express.json());


 
 app.use("/users",usercontroller)

 app.post("/register",register)

 app.post("/login",login)

 app.use("/abletopost",abletopostcontroller)

app.listen(1234,async()=>{
    try{
          await connect();
          console.log("listening 1234")
    }
    catch(err){
        console.log(err)
    }
});