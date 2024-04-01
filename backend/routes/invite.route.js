import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import {sendTictactoeInvite} from "../controllers/tictactoe.controller.js"
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendTictactoeInvite);

export default router;