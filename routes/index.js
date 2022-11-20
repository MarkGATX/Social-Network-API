const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route! Try again unless you are a hacker and then please go away.');
  });

module.exports = router;