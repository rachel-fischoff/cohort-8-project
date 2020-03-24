const router = require('express').Router()
const faker = require('faker')
const User = require('../models/user')
const Todo = require('../models/todo')


//route for getting a single to do 
router.get('/projects/:todo', (req, res) =>{
    
    Todo.findOne({_id: req.params.todo})
      .exec((err, todo) => {
          if (err) {
              res.send(err)
          } else {
              res.send(todo)
          }
      })
  })

  modules.export 