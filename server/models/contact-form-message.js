const mongoose = require("mongoose");

let messageSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    message: { type: String },
    date: { type: Date, default: new Date()}

}, { collection: "mymessages" });

module.exports = mongoose.model('myMessages', messageSchema);