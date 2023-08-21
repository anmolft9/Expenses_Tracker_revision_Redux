import UserSchema from "./userSchema.js";

//obj is the data to be inserted
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

///filter should be an object
export const getOneUser = (filter) => {
  return UserSchema.findOne(filter);
};
