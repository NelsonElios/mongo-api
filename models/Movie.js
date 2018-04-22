const mongoose = require('mongoose');
const Schema = mongoose.model;

const MovieSchema = new Schema({
    title: {type: String, required:[true,'Un titre est requis']},
    duration: {type: Number}

});

const Movie = mongoose.model('movie' , MovieSchema);
module.export = Movie;