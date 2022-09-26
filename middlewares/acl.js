'use strict'

const { userModel } = require("../models");

module.exports = async (req,res, next) => {
    console.log(req)
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await userModel.authenticateToken(token);
    console.log( 'validuser', validUser)
    const userInfo = await userModel.findOne({where: {userName: validUser.userName}});
    console.log( 'role', userInfo.role)

    if(userInfo.role === 'admin') {
        next()
    } else {
        next('only moderators can delete posts!')
    }
}