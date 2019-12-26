const express = require('express');
const router = express.Router();

const messageSchema = require('../models/contact-form-message');

// post messages to the database
router.post('/messages', (req, res, next) => {
    const messages = new messageSchema({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: new Date()
    });
    messages.save()
    res.status(201).json({
        message: "message saved to the database"
    });
});

// get messages from the database

router.get('/read-messages',(req, res, next) => {
    messageSchema.find({}, (err, result) => {
        if(!result){
            res.status(404).json({
                message: "no results found"
            })
        } else if(result){
            res.json(result)
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
});

module.exports = router;