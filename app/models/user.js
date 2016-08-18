
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  phone: Number,
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;