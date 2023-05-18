import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            max: 250,
        },
        likes: {
            type: Array,
            defaultValue: [],
        },
    },
    { timestamp: true }
);

export default mongoose.model("Tweet", TweetSchema);