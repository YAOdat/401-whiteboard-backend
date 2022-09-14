'use strict';


const Comment = (sequelize, DataTypes) => sequelize.define('CommentTable', {
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