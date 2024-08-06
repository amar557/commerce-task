import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

const app = express();

const corsOptions = {
  origin: "https://commerce-task-client.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/list", listingRouter);

mongoose
  .connect(
    "mongodb+srv://amarhussain391:pFyBPpdxx3mGbfWr@cluster0.ifclsty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection error:", error));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
