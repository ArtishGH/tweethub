import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO)
        .then(() => {console.log('connected to mongo')
        })
        .catch((err) => {
            throw err;
        });
};

app.use("/api/users", userRoutes);

app.listen(8000, () => {
    connect();
    console.log('listen to port 8000')
});
