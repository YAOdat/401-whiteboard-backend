'use strict'


const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv')
const post = require ('./post.model')
const comment = require ('./comment.model')
const collection = require('../collections/user-comment-routes');
const users = require('./user.model')

dotenv.config()

// passing connection URL:
//process.env.DATABASE_URL 

const POSTGRES_URL = process.env.HEROKU_POSTGRESQL_AMBER_URL || process.env.DATABASE_URL



let sequelize = new Sequelize (POSTGRES_URL)



sequelize.authenticate().then(() => {
  console.log('Database connected to postgres');
}).catch((err) => {
  console.log(err)
});

const postModel = post(sequelize, DataTypes);
const commentModel = comment(sequelize,DataTypes);
const userModel = users(sequelize, DataTypes);

postModel.hasMany(commentModel, {foreignKey: 'postID', sourceKey: 'id'}) 
commentModel.belongsTo(postModel, {foreignKey: 'postID', targetKey: 'id'})

userModel.hasMany(postModel, {foreignKey: "userID", sourceKey: "id"})
postModel.belongsTo(userModel, {foreignKey: "userID", sourceKey: "id"})


const postCollection = new collection(postModel);
const commentCollection =new collection(commentModel);

module.exports = {
    db: sequelize,
    Post: postCollection,
    Comment: commentCollection,
    commentModel: commentModel,
    userModel: userModel
  }

