const mongoose = require("mongoose");

let userSchema = mongoose.Schema({

    email: { type: String },
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    role: { type: String }
});

module.exports = mongoose.model('myUsers', userSchema );
