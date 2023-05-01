const router = require("express").Router();

const routeUser = require("./userRoutes");
const routePosts = require("./postRoutes");
const routeComments = require("./commentsRoutes");

router.use("/users", routeUser);
router.use("/posts", routePosts);
router.use("/comments", routeComments);

module.exports = router;
