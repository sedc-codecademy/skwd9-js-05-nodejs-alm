const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: false
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
}, { timestamps: true })

module.exports = Player = mongoose.model('Player', playerSchema)