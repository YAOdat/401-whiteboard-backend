const express = require('express');
const router = express.Router();

const {Post} =require('../models/index')

// Routes:

router.get('/post', getPosts);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


//Functions:

async function getPosts (req, res) {
    let post = await Post.findAll();
    res.status(200).json({
        post
    })
}

async function getPost (req, res) {
    let id = req.params.id;
    let post = await Post.findOne({
        where: {id:id}
    });
    res.status(200).json(post)
}

async function createPost(req, res) {
    const newPost = req.body;
    const post = await Post.create(newPost);
    res.status(201).json(post);
  }



//   async function updatePost(req, res) {
//     const id = parseInt(req.params.id);
//     const obj = req.body;
//      let updatedPost = await Post.update({ obj: req.body.obj }, { where: {id:id} }); 
    
//     // Post.update({ obj: req.body.obj }, { where: {id: req.params.id} });

//     res.status(200).json(updatedPost);
//   }


  async function updatePost(req, res) {
    const id = req.params.id;
    const obj = req.body;
   
   const post = await Post.findOne({
    where: {id: req.params.id}
   });

   const updatedFood = await post.update(obj);
    res.status(200).json(updatedFood);

}



  async function deletePost(req, res) {
    const id = req.params.id;
    let deletePost = await Post.destroy({
      where: {id: id}
    });
    res.status(204).json({deletePost});
  }

module.exports = router;
