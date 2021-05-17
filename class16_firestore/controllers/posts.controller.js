const PostsModel = require('../models/posts.model');
const pm = new PostsModel();

class PostsController {

    addNewPost(post) {
        return pm.createNewPost(post);
    }

    fetchAllPosts() {
        return pm.getAllPosts();
    }

    fetchPostById(id) {
        return pm.getPostById(id);
    }

    deletePost(id) {
        return pm.deletePost(id);
    }

    updateWithSet(id, data) {
        return pm.updatePostWithSet(id, data);
    }

    updatePost(id, body) {
        return pm.updatePost(id, body);
    }

    fetchPostsForAuthor(author) {
        return pm.getPostsForAuthor(author);
    }

    fetchPostsSortedByScore() {
        return pm.getPostsSortedByScore();
    }

}

module.exports = PostsController;