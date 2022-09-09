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
  products: {
    type: Mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Product",
  },
});

const Restaurant = Mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
