var express = require('express');
var router = express.Router();

const usermodel = require("./users");

router.get('/', function (req, res) {
  res.render('index');
});
router.get('/create',async function (req, res) {
  let userdata = await usermodel.create({
    username: "arpit",
    nickname: "akku",
    description: "jsdgfjdgsbsdfgsfgs",
    categories: ['node' , 'react' , 'java']
  }
  );
  res.render(userdata);
});
module.exports = router;