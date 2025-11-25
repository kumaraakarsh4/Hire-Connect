import { Session } from "@clerk/express";

export async function createSession(req,res) {
  try {
    const {problem,diffculty} = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    if(!problem || !diffculty){
        return res.status(400).json({msg:"problem and diffculty required"});
    }
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const session = await Session.create({problem,diffculty,host: userId , callId});
    
  } catch (error) {
    
  }  
}
export async function getActiveSession(req,res) {
    
}
export async function getMyRecentSession(req,res) {
    
}
export async function getSessionById(req,res) {
    
}
export async function joinSession(req,res) {
    
}
export async function endSession(req,res) {
    
}