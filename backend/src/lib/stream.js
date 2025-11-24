import { StreamChat } from 'stream-chat';
import {StreamClient} from '@stream-io/node-sdk';
import {ENV} from './env.js';

// FIX: Correctly import the capitalized class

// NOTE: You must have these environment variables set in your project!
const STREAM_API_KEY = process.env.STREAM_API_KEY; 
const STREAM_API_SECRET = process.env.STREAM_API_SECRET;

// Initialize the Stream client
if (!STREAM_API_KEY || !STREAM_API_SECRET) {
    throw new Error("STREAM_API_KEY and STREAM_API_SECRET environment variables must be set.");
}
 export  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET); // this is for video calls
 export const chatClient = new StreamChat(STREAM_API_KEY, STREAM_API_SECRET); // this is for chat features


/**
 * Creates or updates a user in Stream Chat.
 * @param {object} user - User data
 * @param {string} user.id - Clerk ID
 * @param {string} user.name - User display name
 * @param {string} user.image - URL for the profile image
 */
export const upsertStreamUser = async ({ id, name, image }) => {
    console.log(`[StreamChat] Upserting user: ${name} (${id})`);
    try {
        await client.upsertUser({
            id: id,
            name: name,
            image: image,
            role: 'user' // Default role
        });
        console.log(`[StreamChat] User ${id} successfully upserted.`);
    } catch (error) {
        console.error(`[StreamChat] Error upserting user ${id}:`, error);
        throw error;
    }
};

/**
 * Deletes a user from Stream Chat.
 * @param {string} userId - The ID of the user to delete
 */
export const deleteStreamUser = async (userId) => {
    console.log(`[StreamChat] Deleting user: ${userId}`);
    try {
        await client.deleteUser(userId);
        console.log(`[StreamChat] User ${userId} successfully deleted.`);
    } catch (error) {
        // Log error but don't crash if the user already doesn't exist
        console.warn(`[StreamChat] Could not delete user ${userId} (may already be gone):`, error.message);
    }
};