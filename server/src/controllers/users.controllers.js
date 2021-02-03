const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({message: 'Users Adquired'});

userCtrl.createUser = (req, res) => res.json({message: 'User Created'});

userCtrl.getUser = (req, res) => res.json({message: 'One User Adquired'});

userCtrl.updateUser = (req, res) => res.json({message: 'One User Updated'});

userCtrl. deleteUser = (req, res) => res.json({message: 'One User Deleted'})

module.exports = userCtrl;