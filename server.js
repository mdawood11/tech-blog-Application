const path = require("path");
const express = require("express");
const session = require("express-session");
const expHdr = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/config.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const help = expHdr.create({ helpers });

const sessions = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 350000,
    httpsOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessions));

app.engine("handlebars", help.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
