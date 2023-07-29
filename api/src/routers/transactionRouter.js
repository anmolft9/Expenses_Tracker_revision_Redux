import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "../models/transactionModel/transactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "transaction added",
        })
      : res.json({
          status: "failed",
          message: "unable to add transaction",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const filter = {
      userId: authorization,
    };

    const trans = await getTransaction(filter);

    res.json({
      status: "success",
      message: "get method",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;

    if (authorization && _id) {
      const filter = {
        userId: authorization,
        _id,
      };
      const result = await deleteTransaction(filter);

      if (result._id) {
        return res.json({
          status: "success",
          message: "transaction deleted",
        });
      }
    }

    res.json({
      status: "error",
      message: "no id or invalid request",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
