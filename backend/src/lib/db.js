import mongoose, { connection } from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(ENV.DB_URL)
        console.log(" ☑️ connected to MongoDB:",connectDB,connection.host);
        
        
    } catch (error) {
        console.error(" ❌ Error connecting to MongoDB",error)
        process.exit(1) // 0 means success, 1 means failure
    }
}