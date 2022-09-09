import mongoose from "mongoose";

const connectDB = () => {
  const connect = mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(done => console.log(`MongoDB Connected: ${done.connection.host}`.cyan.underline))
    .catch(err => console.log(`Error: ${err.message}`.red.underline.bold))
}

export default connectDB;
