const { Thought } = require('../models');
const User = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.status(200).json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((newThoughtData) => {
                return User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: newThoughtData._id } }, { new: true })
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'Post created, but found no user with that ID' })
                    : res.json('Created the thought 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thoughtData) => res.status(200).json(thoughtData))
            .catch((err) => res.json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate({_id:req.params.thoughtId},{thoughtText: reqbody.thoughtText} , {new:true})
        .then((newThought) => res.status(200).json(newThought))
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({_id:req.params.thoughtId})
        .then((deletedThought) => res.status(200).json(deletedThought))
        .catch((err) => res.status(500).json(err));
    }




}



