import "dotenv/config";
import express from "express";

const app = express();
import cors from "cors";

const PORT = 8000;
import path from "path";

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//middleware
app.use(express.json());
app.use(cors());

///apis
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { authMiddleware } from "./src/middlewares/authMiddleware.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", authMiddleware, transactionRouter);

//to know the root directory of the file
const _dirname = path.resolve();
//tell express to use the path plus the /build file to load the frontend
app.use(express.static(path.join(_dirname, "client/build")));

///root api point
//severside rendering
app.use("/", (req, res, next) => {
  try {
    res.sendFile(path.join(_dirname, "client/build/index.html"));
  } catch (error) {
    next(error);
  }
});

//global error handling function
app.use((error, req, res, next) => {
  const status = error.status || 404;

  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

//port connection of the server

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`connected server at http://localhost:${PORT}`);
});
