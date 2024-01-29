var express = require('express');
var router = express.Router();

// GET request for creating an item
router.get('/', function(req, res, next) {
    res.send('Create route response'); // Sends a plain text response
    // res.render('create'); // Uncomment this if you want to render a view named 'create'
});

module.exports = router;
