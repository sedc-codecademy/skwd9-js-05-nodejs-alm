const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    year: {
        type: Number,
        required: false
    },
    playersIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]
}, { timestamps: true })

module.exports = Team = mongoose.model('Team', teamSchema);