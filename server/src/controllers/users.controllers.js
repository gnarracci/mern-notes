const userCtrl = {};

const User = require('../models/users');

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length > 0) {
            res.status(200).json(users);
        }else{
            res.status(404).json({message: "No data found"});
        }
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { username} = req.body;
        const newUser = new User({
            username: username
        });
        await newUser.save();
        console.log(newUser);
        res.status(200).json({message: "User Saved"});
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

userCtrl. deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user.length > 0) {
            res.status(200).json({message: "User Deleted"});
        }else{
            res.status(404).json({message: "No data found"});
        }
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }

}

module.exports = userCtrl;