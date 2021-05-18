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

router.get("/:id?", (req, res) => {
  if (req.params && req.params.id) {
    const id = req.params.id;
    pc.fetchPostById(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } else {
    pc.fetchAllPosts()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

router.delete("/:id", (req, res) => {
  if (req.params && req.params.id) {
    const id = req.params.id;

    pc.deletePost(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

router.put("/with-set/:id", (req, res) => {
  if (req.params && req.params.id) {
    const id = req.params.id;
    const body = req.body;

    pc.updateWithSet(id, body)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

router.put("/update/:id", (req, res) => {
  if (req.params && req.params.id) {
    pc.updatePost(req.params.id, req.body)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

router.get("/author/:email?", (req, res) => {
  if (req.params && req.params.email) {
    const email = req.params.email;
    pc.fetchPostsForAuthor(email)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
});

router.get("/compound/sorted", (req, res) => {
  pc.fetchPostsSortedByScore()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;
