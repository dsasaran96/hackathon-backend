import Restaurant from "../models/restaurantModel.js";
import asyncHandler from "express-async-handler";

export const createRestaurant = asyncHandler(async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
  });

  const createdRestaurant = await restaurant.save();
  res.status(201).json(createdRestaurant);
});

export const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({});

  res.status(201).json(restaurants);
});
