'use strict'

const express = require('express');
const app = express()
const Post = require('./models/post.model');
const cors = require('cors');
const postRouter = require('./routes/post.route')
// const {Sequelize, DataTypes} = require('sequelize');

app.use(cors());
app.use(express.json());
app.use(postRouter);



// Testing the db:

// const db = new Sequelize ('postgres://odat:0000@localhost:5432/posts')


// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.log('Error: ' + err))


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
    start
  };