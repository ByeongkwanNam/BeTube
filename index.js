import express from 'express';
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`listening: https://localhost:${PORT}`);


const handleHome = (req, res) => {
    console.log("Hi from home");
    res.send("Hello From Home");
}

const handleProfile = (req, res) => res.send("You are asdfon my profile.");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);