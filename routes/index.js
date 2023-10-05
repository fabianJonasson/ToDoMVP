var express = require('express');
var router = express.Router();

let tasks = [
  {id: 1, desc: 'task 1', date: '2023-10-05'},
  {id: 2, desc: 'task 2', date: '2023-10-05'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  if(tasks[id-1]) res.send(`${tasks[id-1].desc}`);
  else res.status(404); res.send('Task not found');
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
