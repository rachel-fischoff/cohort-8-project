const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user_name: String,
  profile_name: String,
  profile_pic_url: String,
  groups: [{
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }]
})

module.exports = mongoose.model('User', userSchema)