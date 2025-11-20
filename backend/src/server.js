import express from 'express';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import {serve} from "inngest/express";
import { inngest } from './lib/inngest.js';

const app = express()
console.log(ENV.PORT);
console.log(ENV.DB_URL);

// credetains true means server allow to browser to iclude cookies on request


app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))


app.use("/api/inngest" , serve({client:inngest,functions}));

app.get("/" , (req,res)=>{
    res.status(200).json({msg:"Success from backend123647"})

})


const startserver = async ()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT,()=>{
console.log("Server is running on port:" ,ENV.PORT);

});
        
        
    } catch (error) {
        console.error(" ❌ Error connecting to server" ,error)
        
    }
}

startserver();