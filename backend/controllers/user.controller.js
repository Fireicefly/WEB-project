import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password");

        if(!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);

    } catch (error) {   
        console.log("Error in getUserById : ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// export const description = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const { description } = req.body;
//         const user = await User.findById(userId).select("-password");
//         user.description = description;
//         await user.save();
//         res.status(200).json({ description: user.description });
//     } catch (error) {
//         console.log("Error in description: ", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
