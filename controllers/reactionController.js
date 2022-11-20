// const {Thought} = require('../models')

// module.exports = {
// createReaction(req, res) {
//     console.log(req.body, req.params.thoughtId)
//     Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$push: {reactions:req.body}}, {new:true})
//     .then((newReact) => res.status(200).json(newReact))
//     .catch((err) => res.status(500).json(err));
// },
// deleteReaction(req,res) {
//     Thought.findOneAndUpdate({_id:req.params.thoughtId}, {$pull:  {reactions:{reactionId: req.params.reactionId}}}, {new:true})
//     .then((response) => res.status(200).json(response))
//     .catch((err) => res.status(500).json(err));

// }
// }