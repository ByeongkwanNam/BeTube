import express from "express";
import routes from "../routes";
import {
    videos,
    videoDelete,
    videoDetail,
    videoEdit,
    getVideoUpload,
    postVideoUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.videoDelete(), videoDelete);

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, uploadVideo, postVideoUpload);

videoRouter.get(routes.videoEdit(), videoEdit);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
