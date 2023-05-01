const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async function (req, res) {
  try {
    const createUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = createUser.id;
      req.session.username = createUser.username;
      req.session.logged_in = true;

      res.status(200).json(createUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login route
router.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "There is no user found!" });
      return;
    }

    const Password = user.checkPassword(req.body.password);

    if (!Password) {
      res.status(400).json({ message: "There is no user found!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;

      res.json({ user, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "There is no user found!" });
  }
});

router.post("/logout", function (req, res) {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
