'use strict';

module.exports = (req,res,next) =>{
    res.status(404).json({
        code:404,
        messgae:'Sorry, page not found'
    })
}
