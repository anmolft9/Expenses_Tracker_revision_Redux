import express from "express";

const app = express();
import cors from "cors";

const PORT = 8000;

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//middleware
app.use(express.json());
app.use(cors());

///apis
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", transactionRouter);

///root api point
app.use("/", (req, res) => {
  try {
    res.send("<h3>coming soon</h3>");
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 404;

  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`connected server at http://localhost:${PORT}`);
});
