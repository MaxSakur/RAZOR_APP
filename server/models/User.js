const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  status: { type: String, enum: ['ok', 'banned'], default: 'ok' },
});

module.exports = model('User', User);
