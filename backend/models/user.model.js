import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    friends: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    friendRequests: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    blockedUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    profilePicture: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
}, {timestamps: true});

// friendsRequestSent, friendsRequestReceived, blocked, banned
const User = mongoose.model("User", userSchema);

export default User;
