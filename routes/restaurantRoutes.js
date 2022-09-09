import express from "express";
import {
  createRestaurant,
  getRestaurants,
} from "../controllers/restaurantController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getRestaurants).post(protect, admin, createRestaurant);

export default router;
