import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRouter from "./route/productRoute.js";
import { corsOptions } from "./config/options.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api", productRouter);

export default app;
