import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    tittle: {
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

export const Song = mongoose.model('Song', songSchema);

