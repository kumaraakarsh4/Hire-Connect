import inngest from "inngest";
import { connectDB } from "./db.js";
import User from "../model/user.js";
import { upsertStreamUser } from "./stream.js";
import { deleteStreamUser } from "./stream.js";

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
       await User.upsertStreamuser({
        id: newUser.clerkId.tostring(),
        name: newUser.name,
        Image: newUser.profileImage

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
        await User.deleteStreamUser(id.tostring());
    }
);
export const functions = [syncUser , deleteUserFromDB];