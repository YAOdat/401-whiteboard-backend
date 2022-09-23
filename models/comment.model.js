'use strict';


const Comment = (sequelize, DataTypes) => sequelize.define('CommentsTable', {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    postID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }


  });
  
  module.exports = Comment;