const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const notesSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  body: {
    type: String
  },
  label: {
    type: String
  },
  color: {
    type: String
  },
  pinned: {
    type: String,
    default: false
  }
}, { timestamps: true });

module.exports = { notesSchema }