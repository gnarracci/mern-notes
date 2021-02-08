const notesCtrl = {};

const Notes = require('../models/notes');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Notes.find();
    if (notes.length > 0) {
        res.status(200).json(notes);
    }else{
        res.status(404).json({message: "No data found"});
    }
};

notesCtrl.createNote = async (req, res) => {
    try {
        const { title, content, date, author } = req.body;
        const newNote = new Notes({
        title: title,
        content: content,
        date: date,
        author: author
    });
        await newNote.save();
        console.log(newNote);
        res.status(200).json({message: "Note Saved"});
    } catch (error) {
        res.status(400).json({message: "Something went wrong"})
    }
};

notesCtrl.getNote = async (req, res) => {
    try {
        const onenote = await Notes.findById(req.params.id);
        console.log(onenote);
        if (!onenote.length > 0) {
            res.status(200).json(onenote);
        }else{
            res.status(404).json({message: "Note not found"});
        }
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

notesCtrl.updateNote = async (req, res) => {
    try {
        const {title, content, author} = req.body;
        await Notes.findByIdAndUpdate(req.params.id, {
            title: title,
            content: content,
            author: author
        });
        res.status(200).json({message: "Note Updated"});
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

notesCtrl.deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id);
        if (!note.length > 0) {
            res.status(200).json({message: "Note is deleted"})
        }else{
            res.status(404).json({message: "Data not found to delete"})
        }
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

module.exports = notesCtrl;