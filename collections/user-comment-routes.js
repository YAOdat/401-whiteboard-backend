'use strict';
const User = require('../models').userModel;

class postCommentRoute {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (e) {
      console.error('Error during the creation attempt', e);
    }
  }

  async read(id) {
    try {
      if(id) {
        return await this.model.findOne({where: {id: id}});
      } else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error(`Error in reading data with the id: ${id}`);
    }
  }

  async update(id, obj) {
    try {
      const dataById = await this.model.findOne({where: {id}});
      return await dataById.update(obj);
    } catch(e) {
      console.error(`Error while updating data with id: ${id}`);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({where: {id}})
    } catch(e) {
      console.error(`Error while deleting the data with id: ${id}`)
    }
  }

  async readWithComments(Comment) {
  
    try {
      return await this.model.findAll({include: [Comment]})
    } catch(e) {
      console.error(`Error while reading the comments for model ${this.model.name}`)
    }
  }

  async readPostComments (id, Comment) {
  
    try {
      return await this.model.findOne({where: {id}, include: [Comment]})
    } catch(e) {
      console.error(`Error while reading the comments for model ${this.model.name}`)
    }
  }
  
}





module.exports = postCommentRoute;