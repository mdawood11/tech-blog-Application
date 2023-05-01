const router = require("express").Router();

const routeUser = require("./userRoutes.js");
const routePosts = require("./postRoutes.js");
const routeComments = require("./commentsRoutes.js");

router.use("/users", routeUser);
router.use("/posts", routePosts);
router.use("/comments", routeComments);

module.exports = router;
