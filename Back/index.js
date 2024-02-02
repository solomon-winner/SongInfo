// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const Song = require('./model/song');

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());

// Connect to MongoDB

mongoose.connect('mongodb://mongo:27017/songs_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// create a song

app.post('/api/songs', async (req, res) => {
    try {
      const { title, artist, album, genre } = req.body;
      const song = new Song({ title, artist, album, genre });
      await song.save();
      res.status(201).json(song);
    } catch (error) {
      console.error('Error creating song:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });