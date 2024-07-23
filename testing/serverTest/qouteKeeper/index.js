// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('index');
    const {quote, attributed, source} = req.body;
});

module.exports = router;
