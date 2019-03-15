const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const app = express();



mongoose.connect('mongodb+srv://mongouser:Qpqi4MOQow2g8twJ@cluster0-zbbim.mongodb.net/fredit?retryWrites=true')
  .then(() => {
    console.log('Connected to Mongodb');
  })
  .catch(() => {
    console.log('MongoDB connection failed!');
  });
app.use(bodyParser.json());

app.use((req ,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
  next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;
