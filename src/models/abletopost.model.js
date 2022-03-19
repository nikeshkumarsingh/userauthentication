const mongoose=require("mongoose");
const abletopostSchema = new mongoose.Schema({
    title : {type : String, required : true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})


const Abletopost = mongoose.model("abletopost", abletopostSchema)

module.exports = Abletopost;