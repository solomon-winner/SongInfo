 import {PORT, mongoDBURL} from './connect.js'
import cors from "cors";
import SongRoutes from "./routes/SongRoute.js"
import express from'express'
import mongoose from 'mongoose'

const app = express();

app.use(express.json());

app.use (
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
)
mongoose.connect(mongoDBURL, {
  
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

