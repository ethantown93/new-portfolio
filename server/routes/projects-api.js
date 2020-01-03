const express = require('express');
const router = express.Router();

const ProjectsSchema = require('../models/projects');
const videoSchema = require('../models/video-presentations');

//posts new projects to database
router.post('/projects', (req, res, next) => {
    const project = new ProjectsSchema({
        link: req.body.link,
        src: req.body.src,
        alt: req.body.alt,
        gitHub: req.body.gitHub,
        description: req.body.description,
        title: req.body.title,
        technologiesUsed: req.body.technologiesUsed,
        myRole: req.body.role
        
    });
    project.save()
    res.status(201).json({
        message: 'data saved'
    });
});

// getes all projects from database
router.get('/projects', (req, res, next) => {
    ProjectsSchema.find({}, (err, result) => {
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
        };
    });
});

// gets all videos from database
router.get('/video-presentations', (req, res, next) => {
    videoSchema.find({}, (err, result) => {
        if(!result){
            res.status(404).json({
                message: "no videos found"
            })
        } else if(result){
            res.json(result)
        } else {
            res.status(500).json({
                message: err
            })
        };
    });
});

// posts new videos to database
router.post('/video-presentations', (req, res, next) => {
    const video = new videoSchema({
        title: req.body.title,
        src: req.body.src,
    });
    video.save()
    res.status(201).json({
        message: 'data saved'
    });
});


module.exports = router;