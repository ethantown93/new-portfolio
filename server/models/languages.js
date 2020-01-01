const mongoose = require("mongoose");

let codingLanguages = mongoose.Schema({
    languages: { type: String },
    proficiency: { type: String },
    src: { type: String },
    alt: { type: String }
})

let languagesSchema = mongoose.Schema({

    languages: [codingLanguages]

});

module.exports = mongoose.model('myLanguage', languagesSchema);