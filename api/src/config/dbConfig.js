import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    if (conn) {
      console.log("DB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
