const { Note } = require('../db/db.connect');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({user_id: req.user.userID});
    if (notes === null) {
      return res.status(200).json({
        success: true,
        notes: []
      })
    }
    res.status(200).json({
      success: true,
      notes
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

const createNote = async (req, res) => {
  try {
    const { title, body, label, color, pinned } = req.body;
    const newNote = new Note({
      user_id: req.user.userID,
      title,
      body,
      label,
      color,
      pinned
    })
    await newNote.save();
    res.status(400).json({
      success: true,
      note: newNote
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

const updateNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const { title, body, label, color, pinned } = req.body;
    const filter = await Note.findOne({ _id: noteID });
    const update = {
      title,
      body,
      label,
      color,
      pinned
    }
    const note = await Note.findOneAndUpdate(filter, update, { new: true });
    res.status(200).json({
      success: true,
      note
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

const deleteNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const response = await Note.findOneAndDelete({ _id: noteID });
    res.status(200).json({
      success: true
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

module.exports = { getNotes , createNote, updateNote, deleteNote }