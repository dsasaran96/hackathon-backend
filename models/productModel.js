import Mongoose from "mongoose";

const productSchema = Mongoose.Schema({
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
  restaurant: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
});

const Product = Mongoose.model("Product", productSchema);

export default Product;
