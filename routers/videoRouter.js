import express from 'express';
import routes from '../routes';
import { videos, videoDelete, videoDetail, videoUpload, videoEdit } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.videoDelete, videoDelete);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoUpload, videoUpload);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;