const faker = require('faker')

const bodyParser   = require('body-parser');
router.use(bodyParser.json());

const User = require('../models/user')
const Groups = require('../models/groups')
const Todos = require('../models/todos')
const Task = require('../models/task')
const Comment = require('../models/comments')

router.get('/generate-fake-data', (request, response, next) => {
  for (let i = 0; i < 20; i++) {
    let user = new User()
    
    user.google_id = faker.random.uuid()
    user.profile_name = faker.internet.userName()
    user.date_created = faker.date.past()
    user.email = faker.internet.email()
    //maybe faker.image.people
    user.profile_pic_url = faker.image.avatar()
    user.save((err) => {
      if (err) throw err
    })

    let group = new Groups()

    group.group_name = faker.company.companyName()
    group.group_type = faker.company.catchPhraseDescriptor()
    group.date_created = faker.date.past()

    // need to do:
    // group.todos = 
    // group.posts =
    // group.people =
    // group.tasks =
    // group.comments =


    let todos = new Todos()

    todos.name = faker.random.words()
    todos.description= faker.lorem.sentence()
    todos.date_created = faker.date.past()
    // todos.num_task = 
    // todos.num_completed = 
    // todos.tasks =
    // todos.comments =
    todos.save((err) => {
        if (err) throw err
    })


    let comment = new Comment()

    comment.title = faker.random.words()
    comment.description = faker.lorem.sentence()
    comment.date_created = faker.date.past()
    // comment.tags = 
    // comment.author =
    // comment.comments = 

    comment.save((err) => {
        if (err) throw err
    })
    
  }
  
  response.end()
})