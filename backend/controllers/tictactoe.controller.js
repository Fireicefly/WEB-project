import React, { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation.js';
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"
import {useSocketContext} from "../../context/SocketContext.jsx";

export const sendTictactoeInvite = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
            
                
        const newTictactoeInvite = ({
            senderId,
            receiverId,
            
        });
      

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.emit("newTictactoeInvite", newTictactoeInvite);
            console.log(newTictactoeInvite)
        }
        res.status(200).json(newTictactoeInvite);
       
    
    } catch (error) {
        console.log("Error in sendTictactoeInvite : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

/*
export const getInvite = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const userId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [userId, userToChatId]
            }
        }).populate("Invite");

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [userId, userToChatId]
            });
            await conversation.save();
        }

        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessages : ", error);
        res.status(500).json({ error: error.message });
    }

};
*/


