const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) =>res.status(200).json(users))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req,res) {
        User.create(req.body)
        .then((newUserData) => res.status(200).json(newUserData))
        .catch((err) => res.status(500).json(err));
    },
    getOneUser(req,res) {
        User.findOne({_id: req.params.userId})
        .then((userData) => res.status(200).json(userData))
        .catch((err) => res.json(err));
    },
    updateOneUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {username: req.body.username, email: req.body.email}, {new:true})
        .then((newUser) => res.status(200).json(newUser))
        .catch((err) => res.status(500).json(err))
    },
    deleteOneUser(req, res) {
        User.findOneAndDelete({_id:req.params.userId})
        .then((confirm) => res.status(200).json(confirm))
        .catch((err) => err.status(500).json(err))
    }
};