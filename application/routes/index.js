var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sura Tales'});
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Login'});
});

router.get('/register', (req, res, next) => {
  res.render('registration', { title: 'Registration'});
});

router.get('/post_image', (req, res, next) => {
  res.render('postimage', { title: 'Post Image'});
});

router.get('/image_post', (req, res, next) => {
  res.render('imagepost', { title: 'Image Post'});
});

module.exports = router;
