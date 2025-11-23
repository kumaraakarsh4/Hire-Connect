import {streamchat} from 'stream-chat';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing ");

}

export const chatClient = streamchat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async(userData) =>{
    try {
        await chatClient.upsertUser(userData)
         console.log("Stream user updated successfully:" , userData);
    } catch (error) {
        console.error("Error upserting Stream user:" , error);
        
    }
}

export const deleteStreamUser = async(userId) =>{
    try {
        await chatClient.deleteStreamUser(userId)
        console.log("Stream user deleted successfully:" , userId);
        
    } catch (error) {
        console.error("Error deleting the  Stream user" , error);
        
    }
}