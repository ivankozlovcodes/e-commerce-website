const express     = require('express');
const router      = express.Router();
const mongoose    = require('mongoose');
const User 	      = mongoose.model('User');

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  User.findOne({ name: req.body.name })
    .then((user) => {
        if (user)
          res.redirect('/dashboard');
        else
          res.render('login');
    })
    .catch(next);
});

module.exports = router;