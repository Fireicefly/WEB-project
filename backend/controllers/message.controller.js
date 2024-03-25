import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
    
        let conversation = await Conversation.findOne({
            participants: {
                 $all: [senderId, receiverId]
            } 
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            
        }

        // await newMessage.save();
        // await conversation.save();

        await Promise.all([newMessage.save(), conversation.save()]);

        // Socket.io

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(200).json(newMessage);
    
    } catch (error) {
        console.log("Error in sendMessage : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const userId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [userId, userToChatId]
            }
        }).populate("messages");

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
