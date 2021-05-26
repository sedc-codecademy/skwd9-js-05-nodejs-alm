module.exports = {
    mongoURI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.gt4c7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}