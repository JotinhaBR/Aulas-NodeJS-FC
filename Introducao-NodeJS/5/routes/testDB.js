var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('user', userSchema, 'users');
