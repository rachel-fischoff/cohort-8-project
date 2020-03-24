const router = require('express').Router()
const faker = require('faker')
const User = require('../models/user')
const Todo = require('../models/todo')


//route for getting a single to do 
router.get('/projects/:todo', (req, res) => {
    
    Todo.findOne({_id: req.params.todo})
      .exec((err, todo) => {
          if (err) {
              res.send(err)
          } else {
              res.send(todo)
          }
      })
})

// This returns all the Todos in the DB
router.get('projects/todos', (req, res) => {

    Todo
        .find()
        .exec((err, todos) => {
            Todo.countDocuments().exec((err, count) => {
                if (err) return next(err)

                res.send({
                    todos: todos,
                    todoCount: count
                })
            })
        })

})

router.post('projects/todos', (req, res) => {

})

// Delete todo based on id in the query params
router.delete('projects/:todo', (req, res) => {

})

// Update todo based on id in the query params
router.put('projects/:todo', (req, res) => {

})


modules.exports = router; 