const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


// handle requests to end points that do not exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;