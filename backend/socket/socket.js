import { Server } from "socket.io";
import http from "http";
import express from "express";
import { getUserFriends } from "../controllers/socket.controller.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

    
io.on('connection', async (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
        console.log('a user connected', userId);
        userSocketMap[userId] = socket.id;
        const friendsList = await getUserFriends(userId);
        const friendsOnline = friendsList.filter(friendId => userSocketMap[friendId]);
        // console.log('userId', userId, 'friendsOnline', friendsOnline);
        
        io.to(socket.id).emit('getOnlineUsers', friendsOnline);
        friendsOnline.forEach(async (friendId) => {
            // console.log('FRIENDS', friendId);
            const friendSocketId = userSocketMap[friendId];
            const friendsOfFriend = await getUserFriends(friendId);
            const friendsOfFriendOnline = friendsOfFriend.filter(friendId => userSocketMap[friendId]);
            io.to(friendSocketId).emit('getOnlineUsers', friendsOfFriendOnline);
            // console.log('userId', friendId, 'friendsOnline', friendsOfFriendOnline);
        });
    }
    
    socket.on('disconnect', async () => {
        console.log('user disconnected', userId);
        delete userSocketMap[userId];
        const friendsList = await getUserFriends(userId);
        const friendsOnline = friendsList.filter(friendId => userSocketMap[friendId]);
        friendsOnline.forEach(async (friendId) => {
            //console.log('FRIENDS', friendId);
            const friendSocketId = userSocketMap[friendId];
            const friendsOfFriend = await getUserFriends(friendId);
            const friendsOfFriendOnline = friendsOfFriend.filter(friendId => userSocketMap[friendId]);
            io.to(friendSocketId).emit('getOnlineUsers', friendsOfFriendOnline);
            //console.log('userId', friendId, 'friendsOnline', friendsOfFriendOnline);
        });
    });
});

export {app, io, server};
