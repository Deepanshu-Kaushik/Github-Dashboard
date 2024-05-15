import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//local imports
import AuthRoutes from "./routes/authRoutes.js";
import UserRoutes from "./routes/authUserRoutes.js";

dotenv.config();

const app = express();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = process.env.COOKIE_NAME;

//Add interface while implementing typescript

//middleware------
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//GET github records for a user

app.use("/api/auth", AuthRoutes);

//GET reading cookies and decoding JWT with secret
app.use("/api/user", UserRoutes);

app.listen(4000, () => {
  console.log("server running on 4000");
});
