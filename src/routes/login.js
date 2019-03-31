const express     = require('express');
const router      = express.Router();
const mongoose    = require('mongoose');
const User 	      = mongoose.model('User');
const { userAnon, userLogged, userAdmin, addUser }  = require('../mw/user');

router.get('/', userAnon,  (req, res, next) => {
  res.render('login');
});

router.post('/', userAnon, (req, res, next) => {
  User.findOne({ name: req.body.name, password: req.body.password })
    .then((user) => {
        console.log(user);
        if (user) {
          res.cookie("user", user._id);
          res.redirect('/dashboard');
        }
        else
          res.render('login');
    })
    .catch(next);
});

module.exports = router;