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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });