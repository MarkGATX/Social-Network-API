const router = require('express').Router();

const {
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getReaction);

router.route('/:reactionId').delete(deleteReaction);



module.exports = router;