import mongoose from "mongoose";

export const connectDB = () => {
  try {
    //mongoclient to the .env file for security purposes

    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    if (conn) {
      console.log("DB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
