import express from 'express';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import {serve} from 'inngest/express';
import { inngest , functions } from './lib/inngest.js';
import { clerkMiddleware } from '@clerk/express';

import chatRoutes from './routes/chatRoutes.js';
import SessionRoutes from './routes/sessionRoutes.js';

const app = express()
console.log(ENV.PORT);
console.log(ENV.DB_URL);

// credetains true means server allow to browser to iclude cookies on request


app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use(clerkMiddleware());

app.use("/api/inngest" , serve({client:inngest,functions}));

app.use("/api/chat" , chatRoutes)
app.use("/api/sessions" , sessionRoutes)
app.get("/health",(req,res)=>{
    res.status(200).json({msg:"Api is up and running"})
})



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