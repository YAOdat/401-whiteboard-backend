'use strict';

const { signup, allUser, signin } = require('../controllers/userControllers');
const userAuth = require('../middlewares/userAuth');
const bearerAuth = require('../middlewares/bearer-auth')

const router = require('express').Router();
router.post('/signin',  signin);
router.post('/signup', userAuth.saveUser, signup)
router.get('/users', bearerAuth, allUser)
module.exports = router;