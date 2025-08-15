import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the Expense Tracker",
  });
});

// app.use(globalErrorHandler);

// app.use(notFound);

export default app;
