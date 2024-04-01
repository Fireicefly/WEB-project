import React, { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation.js';

import {useSocketContext} from "../../context/SocketContext.jsx";

export const sendTictactoeInvite = async () => {
    try {
        const {authUser} = useAuthContext();
        const {selectedConversation} = useConversation();
        const  receiverId  = selectedConversation._id;
        const senderId = authUser._id;
        const {socket} = useSocketContext();
    
                
        const newTictactoeInvite = ({
            senderId,
            receiverId,
            
        });
      

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            socket.emit("newTictactoeInvite", newTictactoeInvite);
            console.log(newTictactoeInvite)
        }

       
    
    } catch (error) {
        console.log("Error in sendTictactoeInvite : ", error);
        
    }
};



const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};
