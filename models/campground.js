const mongoose = require('mongoose');
require('./makingConnectionToDatabase');

const Schema = mongoose.Schema;
const campgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

const Campground = mongoose.model('Compground', campgroundSchema);
module.exports = { Campground };