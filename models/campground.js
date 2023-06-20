const mongoose = require('mongoose');
const { db } = require('./dbconnect');


const Schema = mongoose.Schema;
const campgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

const Campground = mongoose.model('Compground', campgroundSchema);
module.exports = { Campground, db };