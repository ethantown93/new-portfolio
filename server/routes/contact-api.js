const express = require('express');
const router = express.Router();

const messageSchema = require('../models/contact-form-message');

router.post('/messages', (req, res, next) => {
    const messages = new messageSchema({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    messages.save()
    res.status(201).json({
        message: "message saved to the database"
    })

})

module.exports = router;