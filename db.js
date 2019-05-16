import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to db");
const handleError = () => console.log("🚫 ERROR");

db.once("open", handleOpen);
db.on("error", handleError);
