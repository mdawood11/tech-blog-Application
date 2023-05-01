const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const createComment = await Comment.create({
      comment_content: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.json(createComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
