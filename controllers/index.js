const router = require("express").Router();

const routesApi = require("./api");
const routesHome = require("./homeRoutes");
const dashRoutes = require("./dashRoutes");

router.use("/api", routesApi);
router.use("/", routesHome);
router.use("/dashboard", dashRoutes);

module.exports = router;
