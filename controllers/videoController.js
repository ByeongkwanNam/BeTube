import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videoList = await Video.find({});
        res.render("home", { pageTitle: "Home", videoList });
    } catch (err) {
        console.log(err);
        res.render("home", { pageTitle: "Home", videoList: [] });
    }
};
export const search = (req, res) => {
    const {
        query: { term: keyword }
    } = req;
    res.render("search", { pageTitle: "Search", keyword, videoList });
};
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const videoEdit = (req, res) => res.render("videoEdit", { pageTitle: "Video Edit" });
export const videoDelete = (req, res) => res.render("videoDelete", { pageTitle: "Video Delete" });

export const getVideoUpload = (req, res) => {
    res.render("videoUpload", { pageTitle: "Video Upload" });
};
export const postVideoUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    // Todo: upload and save video
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videos + routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
