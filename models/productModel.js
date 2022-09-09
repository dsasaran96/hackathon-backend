import Mongoose from "mongoose";

const productSchema = Mongoose.Schema({
  restaurant: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Resturant",
  },
  name: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  timeFrame: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  image: {
    type: Buffer,
    required: true,
  },
});

const Product = Mongoose.model("Product", productSchema);

export default Product;
