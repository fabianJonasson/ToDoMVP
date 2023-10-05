var express = require('express');
var router = express.Router();

let tasks = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index');
  const newTask = {
    id: req.body.id,
    desc: req.body.desc,
    date: req.body.date
  };

  tasks.push(newTask);
  console.log(tasks);

});

module.exports = router;
module.exports.tasks = tasks;
