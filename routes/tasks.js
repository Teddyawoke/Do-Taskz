const router = require("express").Router();
let Task = require("../models/tasks.models")

router.route("/").get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err  => res.status(400).json("Error: " + err))
});

router.route("/add").post((req, res) => {
 const tasks = req.body.tasks;

 const newTask = new Task({tasks})

 newTask.save()
    .then(() => res.json("Task Added"))
    .catch(err => res.status(400).json("Error :" + err))
})

router.route(":/id").get((req, res) => {
    Task.findById(req.params.id)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json("Error " + err))
})

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(() => res.json('Task deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;