const express = require('express');
const router = express.Router();
const { userModel } = require('../models');
const bearerAuth = require('../middlewares/bearer-auth')
const adminAuth = require('../middlewares/acl')

const {Post, Comment, commentModel} =require('../models/index')

// Routes:

router.get('/post', getPosts);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', adminAuth, deletePost);


//Functions:

async function getPosts (req, res) {
    let post = await Post.read();
    res.status(200).json({
        post
    })
}

async function getPost (req, res) {
    let id = req.params.id;
    // let post = await Post.read(id);
    let postWithComments = await Post.readPostComments(id, commentModel)
    res.status(200).json(postWithComments)
}

async function createPost(req, res) {
    const newPost = req.body;
    const post = await Post.create(newPost);
    res.status(201).json(post);
  }


  async function updatePost(req, res) {
    const id = req.params.id;
    const obj = req.body;
   
   const updatedFood = await Post.update(id, obj);
    res.status(200).json(updatedFood);

}


  async function deletePost(req, res) {
    const id = req.params.id;
      let deletePost = await Post.delete(id);
      res.status(204).json({deletePost});
  
  }

module.exports = router;
