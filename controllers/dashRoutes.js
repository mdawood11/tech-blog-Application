const router = require("express").Router();
const { Post, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// Get all posts
router.get("/", withAuth, async function (req, res) {
  try {
    const dataPost = await Post.findAll({
      where: {
        user_id: req.session.user_id,
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
    const posts = dataPost.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("dashboard", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.redirect("/");
  }
});

// Get route for update post
router.get("/new", function (req, res) {
  res.render("new-post");
});

router.get("/edit/:id", withAuth, async function (req, res) {
  try {
    const dataPost = await Post.findByPk(req.params.id);

    if (dataPost) {
      const post = dataPost.get({ plain: true });
      res.render("edit-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
