const mongoose = require("mongoose");

let messageSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    message: { type: String }

});

module.exports = mongoose.model('myMessages', messageSchema);