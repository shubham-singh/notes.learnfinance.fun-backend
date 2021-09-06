const express = require('express');
const router = express.Router();

const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/note.controller');

router
.get('/', getNotes)
.post('/', createNote)
.put('/:id', updateNote)
.delete('/:id', deleteNote)

module.exports = router;