import { requireAuth } from '@clerk/express';
import user from '../model/user.js';
import { err } from 'inngest/types';
export const protectRoute=[
    requireAuth(),
    async (req,res,next)=>{
        try {
            const clerkId= req.auth().userId;
            if(!clerkId) return res.status(401).json({msg:"unauthorized access - token"});
            const user = await user.findOne({clerkId});
            if(!user) return res.status(404).json({msg:"User not Found"});
            req.user = user;
            next();
        } catch (error) {
            console.error("Error in the protective middleware",error);
            res.status(500).json({msg:"Error in the internal server error"});
            
        }
    }
]