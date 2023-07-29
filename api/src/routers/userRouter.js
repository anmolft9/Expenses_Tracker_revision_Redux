import express from "express";
import { getOneUser, insertUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getOneUser({ email });

    if (user.password === password) {
      user.password = undefined;
      res.json({
        status: "success",
        message: "logged in",
        user,
      });
    }

    res.json({
      status: "error",
      message: "invalid login details",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    result._id
      ? res.json({
          status: "success",
          message: "Registration Successful",
        })
      : res.json({
          status: "error",
          message: "Unable to Register",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "The email id already exist";
    }
    next(error);
  }
});

export default router;
