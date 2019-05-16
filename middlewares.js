import routes from "./routes";
import { EROFS } from "constants";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BeTube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    };
    next(); // don't forget this.
};
