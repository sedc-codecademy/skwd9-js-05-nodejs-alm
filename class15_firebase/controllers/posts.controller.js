const PostsModel = require('../models/posts.model');
const pm = new PostsModel();

class PostsController {

    addNewPost(post) {
        return pm.createNewPost(post);
    }

}

module.exports = PostsController;