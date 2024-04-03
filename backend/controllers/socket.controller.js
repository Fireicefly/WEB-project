import { query } from "express";
import User from "../models/user.model.js";

export const getUserFriends = async (userId) => {
    try {
        const user = await User.findById(userId).select('friends');
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        return user.friends;
    }
    catch (error) {
        console.log("Error in getUserFriends : ", error);
    }
};
