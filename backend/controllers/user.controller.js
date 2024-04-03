import { query } from "express";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedUserId = req.user._id;
        
        const filteredUsers = await User.find({ _id: { $in: req.user.friends } }).select("-password");
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getUsersForSearch = async (req, res) => {
    try {

        const search = req.params.search || "";
        const loggedUserId = req.user._id;
        const filteredUsers = await User.find({$and : [{ _id: { $ne: loggedUserId }}, {_id: { $nin: req.user.friends }}], username: { $regex: `^${search}`, $options: "i" } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSearch : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const addFriend = async (req, res) => {
    try {
        const friendId = req.params.friendId;
        const userId = req.user._id;

        if (friendId == userId) {
            return res.status(400).json({ error: "User cannot be a friend of himself" });
        }
        const alreadyFriend = req.user.friends.includes(friendId);

        if (alreadyFriend) {
            return res.status(400).json({ error: "User is already a friend" });
        }

        const requestNotSent = !req.user.friendRequests.includes(friendId);

        if (requestNotSent) {
            return res.status(400).json({ error: "Friend request not found" });
        }
 
        const friend = await User.findById(friendId).select("fullName username");
        if (!friend) {
            return res.status(400).json({ error: "User not found" });
        }
        const user1 = await User.findByIdAndUpdate(userId, { $push: { friends: friendId } }, { new: true });
        const user2 = await User.findByIdAndUpdate(friendId, { $push: { friends: userId } }, { new: true });
        const user1requestRemoved = await User.findByIdAndUpdate(userId, { $pull: { friendRequests: friendId } }, { new: true });
        return res.status(200).json({ friend });
    }
    catch (error) {
        console.log("Error in addFriend : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const sendFriendRequest = async (req, res) => {
    try {
        const friendId = req.params.friendId;
        const userId = req.user._id;

        if (friendId == userId) {
            return res.status(400).json({ error: "User cannot send friend request to himself" });
        }
        const alreadyFriend = req.user.friends.includes(friendId);

        if (alreadyFriend) {
            return res.status(400).json({ error: "User is already a friend" });
        }

        const requestAlreadyReceived = req.user.friendRequests.includes(friendId);

        if (requestAlreadyReceived) {
            return res.status(400).json({ error: "Accept your friend's request" });
        }

        const friend = await User.findById(friendId).select("fullName username friendRequests");
        if (!friend) {
            return res.status(400).json({ error: "User not found" });
        }

        if (friend.friendRequests.includes(userId)) {
            return res.status(400).json({ error: "Friend request already sent" });
        }

        const user = await User.findByIdAndUpdate(friendId, { $push: { friendRequests: userId } }, { new: true });
        return res.status(200).json({ fullName: friend.fullName, username: friend.username });
    }
    catch (error) {
        console.log("Error in sendFriendRequest : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getFriendRequests = async (req, res) => {
    try {
        const friendRequests = req.user.friendRequests;
        const users = await User.find({ _id: { $in: friendRequests } }).select("fullName username");
        res.status(200).json(users);
    }
    catch (error) {
        console.log("Error in getFriendRequests : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteFriend = async (req, res) => {
    try {
        const friendId = req.params.friendId;
        const userId = req.user._id;
        console.log("userId : ", userId);
        console.log("friendId : ", friendId);

        if (friendId == userId) {
            return res.status(400).json({ error: "User cannot delete himself" });
        }

        if (!req.user.friends.includes(friendId)) {
            return res.status(400).json({ error: "User is not a friend" });
        }

        const user1 = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
        const user2 = await User.findByIdAndUpdate(friendId, { $pull: { friends: userId } }, { new: true });
        return res.status(200).json({ friendId });
    } catch (error) {
        console.log("Error in deleteFriend : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const refuseFriendRequest = async (req, res) => {
    try {
        const friendId = req.params.friendId;
        const userId = req.user._id;

        if (friendId == userId) {
            return res.status(400).json({ error: "User cannot refuse himself" });
        }

        if (!req.user.friendRequests.includes(friendId)) {
            return res.status(400).json({ error: "User has not received friend request" });
        }

        const user = await User.findByIdAndUpdate(userId, { $pull: { friendRequests: friendId } }, { new: true });
        return res.status(200).json({ friendId });
    } catch (error) {
        console.log("Error in refuseFriendRequest : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
