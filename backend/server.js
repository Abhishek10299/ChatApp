import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/Mongodb.js";
import {app, server} from "./socket/socket.js"


const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running ${PORT}`);
});
