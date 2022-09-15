'use strict'


const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv')
const post = require ('./post.model')
const comment = require ('./comment.model')
const collection = require('../collections/user-comment-routes');

dotenv.config()

// passing connection URL:
//process.env.DATABASE_URL 

const POSTGRES_URL = process.env.HEROKU_POSTGRESQL_AMBER_URL

const sequelizeOptions = {
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
};


let sequelize = new Sequelize (POSTGRES_URL, sequelizeOptions)
const postModel = post(sequelize, DataTypes);
const commentModel = comment(sequelize,DataTypes);
=======

// const POSTGRES_URL = process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_AMBER_URL



postModel.hasMany(commentModel, {foreignKey: 'postID', sourceKey: 'id'}) 
commentModel.belongsTo(postModel, {foreignKey: 'postID', targetKey: 'id'})

const postCollection = new collection(postModel);
const commentCollection =new collection(commentModel);

module.exports = {
    db: sequelize,
    Post: postCollection,
    Comment: commentCollection,
    commentModel: commentModel
  }

