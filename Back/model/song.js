const mongoose = require('mongoose');

// Define the schema for the Song model
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
