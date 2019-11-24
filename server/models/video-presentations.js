const mongoose = require("mongoose");

let presentationSchema = mongoose.Schema({

    title: { type: String },
    src: { type: String }
    
});

module.exports = mongoose.model('myPresentations', presentationSchema);