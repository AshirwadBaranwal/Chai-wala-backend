// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is listening on Port : ${process.env.PORT}`);
    }),
  )
  .catch((error) => {
    console.log("MongoDB connection Failed:", error);
  });

















  
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR:", error);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on Port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
