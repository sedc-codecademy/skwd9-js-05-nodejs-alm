const router = require("express").Router();
const PostsController = require("../controllers/posts.controller");
const pc = new PostsController();

router.post("/", (req, res) => {
  const newPost = req.body;
  pc.addNewPost(newPost)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;
