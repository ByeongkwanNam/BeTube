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

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.videoDelete(), videoDelete);

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, postVideoUpload);

videoRouter.get(routes.videoEdit(), videoEdit);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
