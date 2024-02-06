import {PORT, mongoDBURL} from './connect.js'
import cors from "cors";
import SongRoutes from "./routes/SongRoute.js"
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Connect to MongoDB
app.use (
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
)
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use ("/Back/Song",SongRoutes)
app.listen(PORT, () => {
  console.log('I am Listening at ', PORT);
})

