import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videoList });
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
export const postVideoUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // Todo: upload and save video
    res.redirect(routes.videos + routes.videoDetail(22222));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
