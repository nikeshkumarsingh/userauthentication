const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Abletopost=require("../models/abletopost.model.js");
const authenticate=require("../middleware/authenticate.js");
const req = require("express/lib/request");
router.post("",authenticate,async()=>{
    req.body.user_id = req.userID;
    try{
    const abletopost=await Abletopost.create(req.body)
    return res.status(200).send(abletopost)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.get("", async (req, res) => {
    try{
        const abletopost = await Abletopost.find()
        return res.status(200).send(abletopost)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.delete("",async(req,res)=>{
    try{
        const abletopost=await Abletopost.deleteOne()
        return res.status(200).send(abletopost);
    }catch(err){
        return res.status(500).send({message:err.message});
    }
})
module.exports=router;