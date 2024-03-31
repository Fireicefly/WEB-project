import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/getuser/:id", protectRoute, getUsersForSidebar);
// router.get("/user/description", protectRoute, description);

export default router;