/**
 * /api/routes/
 * 
 * TODO: add support for changeing score
 *       Add user when creating new
 */

const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('', (req, res, next) => {
  const post = new Post({
    user: req.body.user,
    score: 0,
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added succusfully',
      postId: createdPost._id
    });
  });
});

router.put('/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post )
  .then(result => {
    console.log(result);
    res.status(200).json({message: 'Message updated'})
  });
});

router.get('', (req, res, next) => {
  Post.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'Posts fetched succesfull',
        posts: documents
      });
    });
});

router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).json({message: 'Post not found'})
    }
  })
});


router.delete('/:id', (req,res,next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log('deleted', req.params.id);
    res.status(200).json({ message:"Post deleted!" });
  });
});

module.exports = router;
