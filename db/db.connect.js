const mongoose = require('mongoose');

const dbURI = process.env['dbURI'];

const { notesSchema } = require('../models/note.model');

const dbConnect = mongoose.createConnection(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Note = dbConnect.model('note', notesSchema)

module.exports = { Note }