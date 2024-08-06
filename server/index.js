import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

const app = express();
app.listen(3000, (req, res, next) => {
  console.log("server is running");
});
var corsOptions = {
  origin: "https://commerce-task-client.vercel.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Credentials: true,
};
app.use(cors());
app.use(express.json(corsOptions));
app.use("/api/auth", authRouter);
app.use("/api/list", listingRouter);
mongoose
  .connect(
    "mongodb+srv://amarhussain391:pFyBPpdxx3mGbfWr@cluster0.ifclsty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("database connected"));
