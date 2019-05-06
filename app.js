import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => {
    console.log("Hi from home");
    res.send("Hello From Home");
}

const handleProfile = (req, res) => res.send("You are asdfon my profile.");

const handleBetween = (req, res, next) => {
    next();
    console.log("I'm between");
    
}

/*
    Middleware > Route 처리
    IP 차단 등에 사용될 수 있음.
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;