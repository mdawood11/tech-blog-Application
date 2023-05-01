const router = require("express").Router();
const { Post } = require("../../models");
const sequelize = require("../../config/config");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async function (req, res) {
  try {
    const createPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    console.log("Create post: ", createPost);

    res.json(createPost);
  } catch (err) {
    console.log("Post failed!", err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async function (req, res) {
  try {
    const newPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (newPost) {
      res.status(200).json(newPost);
    } else {
      res.status(404).json({ message: "There is no post found with this id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postDelete = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (postDelete) {
      res.status(200).json(postDelete);
    } else {
      res.status(404).json({ message: "There is no post found with this id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
