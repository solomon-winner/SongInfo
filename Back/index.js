// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const Song = require('./model/song');

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());

// Connect to MongoDB

