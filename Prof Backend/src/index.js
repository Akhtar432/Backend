// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.error("MONGO DB Connection failed !!!", err);
        process.exit(1);
    });








/*
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js';
import express from 'express';

dotenv.config();

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");

        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})(); 
*/