const mongoose = require("mongoose");

let codingLanguages = mongoose.Schema({
    language: { type: String },
    proficiency: { type: Number }
})

let languagesSchema = mongoose.Schema({

    languages: [codingLanguages]

});

module.exports = mongoose.model('myLanguage', languagesSchema);