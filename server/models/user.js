const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  google_id: String,
  profile_name: String,
  email: String,
  date_created: String,
  profile_pic_url: String
})

module.exports = mongoose.model('User', userSchema)
