const router = require('express').Router()
const faker = require('faker')
const User = require('../models/user')
const Todo = require('../models/todo')


//route for getting a single to do 
router.get('/projects/:todo', (req, res) => {

    Todo
        .findOne({
            _id: req.params.todo
        })
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
    //variable for new todo being added to the db from request
    let newTodo = new Todo({
        name: req.body.name,
        description: req.body.description,
        date_created: req.body.date_created,
        num_tasks: req.body.num_tasks,
        num_completed: req.body.num_completed,
        tasks: req.body.tasks,
        comments: req.body.comments
    })

    newTodo
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: "Todo Added Successfully",
                createdTodo: {
                    name: result.name,
                    description: result.description,
                    date_created: result.date_created,
                    num_tasks: result.num_tasks,
                    num_completed: result.num_completed,
                    tasks: result.tasks,
                    comments: result.comments,
                    request: {
                        type: 'GET',
                        url: `http://localhost:3000/projects/${result._id}`
                    }
                }
            })
        })
})

// Delete todo based on id in the query params
router.delete('projects/:todo', (req, res) => {

})

// Update todo based on id in the query params
router.put('projects/:todo', (req, res) => {

})


modules.exports = router;