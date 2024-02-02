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
  // List all Songs
  app.get('/api/songs', async (req, res) => {
    try {
      const songs = await Song.find();
      res.json(songs);
    } catch (error) {
      console.error('Error listing songs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //Update Songs
  app.put('/api/songs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, artist, album, genre } = req.body;
      const updatedSong = await Song.findByIdAndUpdate(id, { title, artist, album, genre }, { new: true });
      res.json(updatedSong);
    } catch (error) {
      console.error('Error updating song:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Delete Songs

  app.delete('/api/songs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Song.findByIdAndDelete(id);
      res.json({ message: 'Song deleted successfully' });
    } catch (error) {
      console.error('Error deleting song:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //Generate Statistics

  app.get('/api/statistics', async (req,res) => {
    try {
        const total = await Song.countDocuments();
        const artists = await Song.distinct('artist');
        const albums = await Song.distinct('album');
        const genres = await Song.distinct('genre');
        const genreCounts = await Song.aggregate([{ $group: { _id: '$genre', count: { $sum: 1 } } }]);
        const artistAlbumCounts = await Song.aggregate([{ $group: { _id: { artist: '$artist', album: '$album' }, count: { $sum: 1 } } }]);

        res.json({
            total,
            artists: artists.length,
            albums: albums.length,
            genres: genres.length,
            genreCounts,
            artistAlbumCounts
          });
        } catch (error) {
            console.error("Error", error);
            res.status(500).json({'Internal Server Error'})
        }
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });