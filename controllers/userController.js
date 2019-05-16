import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const { name, email, password, password2 } = req.body; // app.js > bodyParser 덕분에 가능
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // Todo: register user
        // Todo: ogin
        res.redirect(routes.home);
    }
};

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};
export const getlogin = (req, res) => {
    // Todo: Process logout
    res.render("login", { pageTitle: "Log In" });
};

export const logout = (req, res) => {
    res.redirect(routes.home);
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
