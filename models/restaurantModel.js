import Mongoose from "mongoose";

const restaurantSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Restaurant = Mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
