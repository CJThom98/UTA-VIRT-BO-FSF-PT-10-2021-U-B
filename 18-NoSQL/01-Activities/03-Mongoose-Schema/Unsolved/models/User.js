const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  // YOUR CODE HERE
  //

  username: {
    type: String,
    trim: true,
    required: true,
    required: 'Username is Required',
  },
  password: {
    type: String,
    trim: true,
    required: 'at least 6 characters',
    minLength: 6,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/],
  },
  userCreated: {
    data: Date,
    default: Date.now,
  },
});

const User = model('User', UserSchema);

module.exports = User;
