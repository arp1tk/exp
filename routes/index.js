var express = require('express');
var router = express.Router();

const User = require('./users');

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/create', async function (req, res) {
  try {
    let userdata = await User.create({
      username: "arpit",
      nickname: "akku",
      description: "jsdgfjdgsbsdfgsfgs",
      categories: ['node', 'react', 'java']
    });

    // If you have a view template for userdata
    // res.render('templateName', { userdata });

    // If you want to send userdata as JSON response
    res.json(userdata);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred');
  }
});

module.exports = router;
