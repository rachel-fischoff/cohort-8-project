const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  google_id: String,
  profile_name: String,
  profile_pic_url: String,
  email: String, 
  date_created: Date 
})

module.exports = mongoose.model('User', UserSchema)
