'use strict';

const { signup, allUser, signin } = require('../controllers/userControllers');
const userAuth = require('../middlewares/userAuth');

const router = require('express').Router();

router.post('/signin', signin);
router.post('/signup', userAuth.saveUser, signup)
router.get('/users', allUser)

module.exports = router;