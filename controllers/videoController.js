export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
    const {
        query: { term: keyword }
    } = req;
    res.render("search", { pageTitle: "Search", keyword });
};
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const videoEdit = (req, res) => res.render("videoEdit", { pageTitle: "Video Edit" });
export const videoDelete = (req, res) => res.render("videoDelete", { pageTitle: "Video Delete" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const videoUpload = (req, res) => res.render("videoUpload", { pageTitle: "Video Upload" });
