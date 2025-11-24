import {Inngest} from "inngest";
import { connectDB } from "./db.js";
import User from "../model/user.js";
// FIX: Import the functions directly, not the User model methods
import { upsertStreamUser, deleteStreamUser } from "./stream.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "Hire-Connect" });

const syncUser = inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async ({event}) => {
        await connectDB()
        const {id,email_addresses,first_name,last_name,image_url} = event.data
        const newUser = {
            clerkId:id,
            email:email_addresses[0]?.email_address,
            name:`${first_name || ""} ${last_name || ""}`,
            profileImage: image_url
        }
        await User.create(newUser)

        // FIX 1: Call the imported function (upsertStreamUser), not a User model method (User.upsertStreamuser)
        // FIX 2: Correct property name from 'Image' to 'image'
        await upsertStreamUser({
            id: newUser.clerkId.toString(),
            name: newUser.name,
            image: newUser.profileImage
        });
    }
);

const deleteUserFromDB = inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async ({event}) => {
        await connectDB()
        const {id} = event.data
        await User.deleteOne({clerkId:id});

        // FIX 3: Call the imported function (deleteStreamUser), not a User model method (User.deleteStreamUser)
        await deleteStreamUser(id.toString());
    }
);

export const functions = [syncUser , deleteUserFromDB];