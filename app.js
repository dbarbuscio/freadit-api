const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use((req ,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-ControlAllow-Meathods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succusfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'ddd',
      user: 'User1',
      score: 15,
      title: 'ddd server post',
      content: 'This is server content'
    },
    {
      id: 'dfgdrfg',
      user: 'User1',
      score: 15,
      title: 'Second server post',
      content: 'This is second server content'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfull',
    posts: posts
  });

});

module.exports = app;
