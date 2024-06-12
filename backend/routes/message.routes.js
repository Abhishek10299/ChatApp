import { Router } from "express";
import { sendMessage,getMessages } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js"

const router = Router();

router.post("/send/:id", protectRoute, sendMessage);

router.get("/:id",protectRoute,getMessages)

export default router;
