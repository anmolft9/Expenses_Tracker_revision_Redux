// import mongoose from "mongoose";
import TransactionSchema from "./TransactionSchema.js";

// add transaction
export const addTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

///get the transaction , filter is the object
export const getTransaction = (filter) => {
  return TransactionSchema.find(filter);
};

//delete transaction
export const deleteTransaction = (filter) => {
  return TransactionSchema.findOneAndDelete(filter);
};
