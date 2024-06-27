import Note from "../models/Note.js";

// ---- CREATE A NOTE ----
const createNote = async (req, res) => {
    // get the sent in data off request body
    const title = req.body.title;
    const description = req.body.description;
    // Create a note with it
    const note = await Note.create({
        title: title,
        description: description,
    });
    // respond with the new note
    res.json({ note: note });
};
// ---- FIND A NOTE ----
const fetchNote = async (req, res) => {
    // Get id from URL
    const noteId = req.params.id;
    //Find the note
    const note = await Note.findById(noteId);
    // Respond
    res.json({ note: note });
};
// ---- FIND ALL THE NOTES ----
const fetchNotes = async (req, res) => {
    //Find the notes
    const notes = await Note.find();
    // Respond
    res.json({ notes: notes });
};
// ---- UPDATE A NOTE ----
const updateNote = async (req, res) => {
    // Get the id
    const noteId = req.params.id;
    // Get the data to update
    const title = req.body.title;
    const description = req.body.description;

    // Find and update the note
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        description: description,
    });
    // Find updated note
    const note = await Note.findById(noteId);
    // Respond
    res.json({ note: note });
};
// ---- DELETE A NOTE ----
const deleteNote = async (req, res) => {
    // Get id from URL
    const noteId = req.params.id;
    // Delete the note
    await Note.findByIdAndDelete(noteId);
    // Respond
    res.json({ success: "The note has been deleted" });
};

export default { createNote, fetchNote, fetchNotes, updateNote, deleteNote };
