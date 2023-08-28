import { getOneUser } from "../models/userModel/userModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    //do authorisation header Exist?

    const { authorization } = req.headers;

    if (authorization) {
      //do user exist in the DB?
      const user = await getOneUser({ _id: authorization });

      if (user?._id) {
        req.userInfo = user;
        return next();
      }
    }

    //if the status of the application is 403
    res.status(403).json({
      status: "error",
      message: "Forbidden /not Allowed",
    });
  } catch (error) {
    next(error);
  }
};
