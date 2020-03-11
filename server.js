try {
    require('dotenv').config();
} catch (error) {
    console.log(error);
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const serverPort = process.env.SERVER_PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const moviesRoutes = require('./routes/movies');
app.use('/movies', moviesRoutes);

app.listen(serverPort, () => console.log('Server Started'));