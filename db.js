import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/betube", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅connected to db");
const handleError = () => console.log("🚫 ERROR");

db.once("open", handleOpen);
db.on("error", handleError);
