'use strict'


const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv')
const post = require ('./post.model')
dotenv.config()

// passing connection URL:

const POSTGRES_URL = process.env.DATABASE_URL 



let sequelize = new Sequelize (POSTGRES_URL)

module.exports = {
    db: sequelize,
    Post: post(sequelize, DataTypes)
  }