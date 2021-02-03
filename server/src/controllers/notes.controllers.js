const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved'});

notesCtrl.getNote = (req, res) => res.json({message: 'One Note Adquired'});

notesCtrl.updateNote = (req, res) => res.json({message: 'One Note Updated'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'One Note Deleted'});

module.exports = notesCtrl;