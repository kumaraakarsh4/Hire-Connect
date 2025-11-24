import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
    problem:{
    type:String,
    required:true,
    },
    diffculty:{
        type:String,
        Enum:["Easy" , "Medium" ,  "Hard"],
         required:true,
    },
})
const Session = mongoose.model("Session" , sessionSchema)

export default Session