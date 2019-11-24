const express = require('express');
const router = express.Router();

const languagesSchema = require('../models/languages');

router.post('/languages', (req, res, next) => {
    const language = new languagesSchema({
        languages: req.body.languages,
        proficiency: req.body.proficiency
    });
    language.save()
    res.status(201).json({
        message: 'data saved'
    })
    console.log(language)
})

router.get('/languages', (req, res, next) => {
    languagesSchema.find({}, (err, result) => {
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
})

module.exports = router;