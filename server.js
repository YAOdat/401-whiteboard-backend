'use strict'

const express = require('express');
const app = express()
const cors = require('cors');
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const userRouter = require('./routes/user.route')

app.use(cors());
app.use(express.json());
app.use(postRouter);
app.use(commentRouter);
app.use(userRouter);



app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Home page',
      code: 200
    })
  })


 function start(port) {
    app.listen(port, () => console.log(`Up and running on port ${port}`));
  }


  module.exports = {
    start,
    app
  };