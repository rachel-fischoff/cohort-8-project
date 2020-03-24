const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  profile_name: String,
  profile_pic_url: String,
  email: String, 
  date_created: Date 
})

module.exports = mongoose.model('User', userSchema)
