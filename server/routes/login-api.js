const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

// login api

router.post('/login', (req, res, next) => {
    let foundUser;
    let loginData = req.body
    User.findOne({ email: loginData.email }).then( user => {
        if(!user) {
            return res.status(404).json({
                message: "no user found in the database"
            });
        }
        foundUser = user
        // match user password input with hashed password stored in the database
        return bcrypt.compare(req.body.password, user.password); 
    }).then( result => {
        if(!result){
            return res.status(401).json({
                message: "email or password are incorrect"
            });
        }
        const token = jwt.sign({ userId: foundUser._id }, "this_is_my_secret_key", { expiresIn: '2h' })
        res.status(200).json({
            token: token,
            userId: foundUser._id
        });
    });
});

//create user api
router.post('/new-user', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then( hash => {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        user.save()
        .then( result => {
            res.status(201).json({
                message: "user successfully created",
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    })
})


module.exports = router;