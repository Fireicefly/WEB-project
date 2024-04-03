import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersForSidebar, getUsersForSearch, addFriend, sendFriendRequest, getFriendRequests, deleteFriend, refuseFriendRequest } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/friendrequests", protectRoute, getFriendRequests);
router.post("/searchfriend/:search?", protectRoute, getUsersForSearch);
router.post("/addfriend/:friendId", protectRoute, addFriend);
router.post("/sendrequest/:friendId", protectRoute, sendFriendRequest);
router.post('/refuserequest/:friendId', protectRoute, refuseFriendRequest);
router.post("/deletefriend/:friendId", protectRoute, deleteFriend);

export default router;