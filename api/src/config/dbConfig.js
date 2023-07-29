import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/expense_tracker_revision_back";
    const conn = mongoose.connect(MONGO_CLIENT);
    if (conn) {
      console.log("DB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
