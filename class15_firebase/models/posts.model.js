class PostsModel {
  createNewPost(postData) {
    return new Promise((resolve, reject) => {
      process.firebase
        .firestore()
        .collection("posts")
        .add(postData)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = PostsModel;