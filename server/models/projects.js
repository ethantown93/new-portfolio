const mongoose = require("mongoose");

let ProjectsSchema = mongoose.Schema({

    link: { type: String },
    src: { type: String },
    alt: { type: String },
    gitHub: { type: String },
    descripton: { type: String }

});

module.exports = mongoose.model('myProjects', ProjectsSchema);
