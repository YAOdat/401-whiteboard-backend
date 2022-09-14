'use strict'

const express = require('express');
const router = express.Router();

const {Comment} =require('../models/index')

// Routes:

router.get('/comment', getComments);
router.get('/comment/:id', getComment);
router.post('/comment/:id', createComment);
// router.put('/comment/:id', updateComment);
// router.delete('/comment/:id', deleteComment);


async function getComments (req, res) {
    let comment = await Comment.read();
    res.status(200).json({
        comment
    })
}

async function getComment (req, res) {
    let id = req.params.id;
    let comment = await Comment.read(id);
    console.log(comment)
    res.status(200).json(comment)
}

async function createComment(req, res) {
    const id = req.params.id
    const newComment = req.body;
    const comment = await Comment.create(newComment);

    res.status(201).json(comment);
  }


  module.exports = router;