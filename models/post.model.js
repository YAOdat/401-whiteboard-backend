'use strict';

const Post = (sequelize, DataTypes) => sequelize.define('NewPostsTable', {
  postTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postBody: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

module.exports = Post;