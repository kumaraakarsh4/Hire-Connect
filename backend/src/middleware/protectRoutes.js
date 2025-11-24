import { requireAuth } from '@clerk/express';
import user from '../model/user.js';
export const protectRoute=[
    requireAuth(),
    async (req,res,next)=>{
        try {
            const clerkId= req.auth().userId;
        } catch (error) {
            
        }
    }
]