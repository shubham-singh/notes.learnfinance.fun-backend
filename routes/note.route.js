const express = require('express');
const router = express.Router();

const { getNotes, createNote, updateNote } = require('../controllers/note.controller');

router
.get('/', getNotes)
.post('/', createNote)
.put('/:id', updateNote)

module.exports = router;