import express from "express";
import { protect, admin } from "../middleware/authMiddleware"

const router = express.Router()

import { authUser, registerUser, getUserProfile, updateUserProfile } from "../controllers/userController.js"

router.post("/login", authUser)
router.post("/register", registerUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;
