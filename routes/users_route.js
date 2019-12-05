const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/all_users', function(req, res, next) {
    /*Get all users info from database*/
    User.find()
   .then(users => res.json(users))
});

router.get('/user/:id', function(req, res, next) {
    /*Get user info from database*/
    let id = req.params.id
    User.findById(id)
   .then(user => res.json(user))
});

module.exports = router;