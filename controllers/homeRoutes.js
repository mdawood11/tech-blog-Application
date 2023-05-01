const router = require("express").Router();
const { Post, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// get all homepage posts.
router.get("/", async function (req, res) {
  try {
    const dataPosts = await Post.findAll({
      include: [User],
    });

    const posts = dataPosts.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post.
router.get("/post/:id", withAuth, async function (req, res) {
  try {
    const dataPosts = await Post.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (dataPosts) {
      const post = dataPosts.get({ plain: true });
      console.log(post);
      res.render("post-by-id", { post, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//navigate to login or signup page.
router.get("/login", function (req, res) {
  res.render("login");
});

module.exports = router;
