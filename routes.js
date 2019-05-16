// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// videos
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";
const VIDEO_DELETE = "/:id/delete";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_UPLOAD = "/upload";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
            return `/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    videoDetail: id => {
        if (id) {
            return `/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    videoDelete: id => {
        if (id) {
            return `/${id}/delete`;
        } else {
            return VIDEO_DELETE;
        }
    },
    videoEdit: id => {
        if (id) {
            return `/${id}/edit`;
        } else {
            return VIDEO_EDIT;
        }
    },
    videoUpload: VIDEO_UPLOAD
};

export default routes;
