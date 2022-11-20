const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtRoutes = require('./ThoughtRoutes');
const reactionRoutes = require('./ReactionRoutes');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;