const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const thoughtRoutes = require('./ThoughtRoutes');


router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);


module.exports = router;