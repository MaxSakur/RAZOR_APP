const { Schema, model, ObjectId } = require('mongoose');
const type = require('./types');

const Character = new Schema({
  lvl: { type: Number, default: 1 },
  class: { type: String, enum: type.class },
  equipment: { type: ObjectId, ref: 'Item', required: true },
  inventory: { type: ObjectId, ref: 'Item', required: true },
  user: { type: ObjectId, ref: 'User' },
});

module.exports = model('Character', Character);
