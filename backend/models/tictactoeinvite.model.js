import mongoose from "mongoose";

const InviteSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    message: {
        type: String,
        required: false
    }}, 
    {timestamps: true});

const Message = mongoose.model("TictactoeInvite", InviteSchema);

export default Message;