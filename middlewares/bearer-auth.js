'use strict'

const { userModel } = require("../models");


module.exports = async (req,res, next) => {
    console.log('Testing bearer');
    console.log(req.headers.authorization, 'token')
    if(!req.headers.authorization){
       return next('You are not authorized!')
    }
    const token = req.headers.authorization.split(' ').pop();
    // console.log(token)
    try {
        const validUser = await userModel.authenticateToken(token);

        const userInfo = await userModel.findOne({where: {userName: validUser.userName}});

        if(userInfo) {
          req.user = userInfo;
          req.token = userInfo.token

          next();
        } else {
          next('You are not authorized!')
        }
    
      } catch(e) {
        next(e.message || e)
      }
}