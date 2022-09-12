'use strict';

const Post = (sequelize, DataTypes) => sequelize.define('PostTable', {
  postTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postBody: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Post;