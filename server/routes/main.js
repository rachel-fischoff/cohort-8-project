const router = require('express').Router()
const faker = require('faker')
const User = require('../models/user')
const Todo = require('../models/todo')


//route for getting a single todo list page 
router.get('/groups/:groupId/:todo', (req, res) =>{
    
    Todo.findOne({_id: req.params.todo})
      .exec((err, todo) => {
          if (err) {
              res.send(err)
          } else {
              res.send(todo)
          }
      })
  })

  module.exports = router; 