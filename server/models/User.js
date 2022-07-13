const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registered: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  status: { type: String, enum: ['ok', 'banned'], default: 'ok' },
});

module.exports = model('User', User);
