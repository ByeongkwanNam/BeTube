import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.videoDelete, (req, res) => res.send("Video Delete"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.videoUpload, (req, res) => res.send("Video Upload"));
videoRouter.get(routes.videoEdit, (req, res) => res.send("Video Edit"));

export default videoRouter;