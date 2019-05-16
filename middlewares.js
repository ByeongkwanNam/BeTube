import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "videoList/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BeTube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    };
    next(); // don't forget this.
};

export const uploadVideo = multerVideo.single("videoFile");
