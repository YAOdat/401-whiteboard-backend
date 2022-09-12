'use strict'


const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv')
const post = require ('./post.model')
dotenv.config()

// passing connection URL:

const POSTGRES_URL = process.env.DATABASE_URL 

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}


let sequelize = new Sequelize (POSTGRES_URL, sequelizeOption)

module.exports = {
    db: sequelize,
    Post: post(sequelize, DataTypes)
  }