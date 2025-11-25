import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    problem:{
    type:String,
    required:true,
    },
    diffculty:{
        type:String,
        enum:["Easy" , "Medium" ,  "Hard"],
          required:true,
    },
    host:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    participants: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      default:null,  
    },
    status:{
      type:String,
      enum : ["Active" , "Completed"],
      default:"Active"  
    },
    // stream video call id
    callId:{
        type:String,
        default:"",
    },
},{timestamps:true});

// Define the model
const Session = mongoose.model("Session" , sessionSchema)

// Export the model using the default export
export default Session