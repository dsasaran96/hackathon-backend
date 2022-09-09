import express from "express";
import { createRestaurant } from "../controllers/restaurantController.js";
import { protect, admin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getRestaurants).post(protect, admin, createRestaurant);

export default router;
