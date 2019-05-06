import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BeTube";
    res.locals.routes = routes;
    next(); // don't forget this.
};
