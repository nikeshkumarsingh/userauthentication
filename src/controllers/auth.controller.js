const User= require("../models/user.model.js");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const genrateToken =(user)=>{
  console.log(process.env.JWT_KEY)
    return jwt.sign({user},process.env.JWT_KEY)
}
const register=async(req,res)=>{
    try{
          let user= await User.findOne({email: req.body.email});
        
          if(user){
              return res.status(400).send({message:"already exist"});
          }
          user= await User.create(req.body);
          const token=genrateToken(user);
         
          return res.status(200).send({user,token});
    }
    catch(err){
       res.status(500).send({message:err.message});
    }
}


const login =async(req,res)=>{
    try{
      const user= await User.findOne({email:req.body.email});
      if(user){
          return res.status(200).send("wrong credential")
      }
      const match= user.checkPassword(req.body.password)
      if(match){
        return res.status(200).send("wrong credential") 
      }
      const token = genrateToken(user);
      return res.status(200).send({user,token})
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
}
module.exports={register,login}