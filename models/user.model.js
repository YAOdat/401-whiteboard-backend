'use strict';

const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('userstable', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    token: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return jwt.sign({
          userName: this.userName
        }, process.env.JWT_SECRET_KEY)
      },
      set(tokenObj) {
        return jwt.sign(tokenObj, process.env.JWT_SECRET_KEY)
      }
    },

    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user'
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get: function() {
        const acl = {
          admin: ['read', 'create', 'update', 'delete'],
          user: ['read', 'create']
          
        }
        return acl[this.role]
      }
    }

  });

  User.authenticateToken = token => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if(error) {
        return error;
      } else {
        return decoded;
      }
    })
    
  }

  return User;
}


