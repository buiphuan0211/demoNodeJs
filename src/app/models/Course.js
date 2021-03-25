const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const Course = new Schema({
    name: { type: String, default: '' },
    discription: { type: String, default: '' },
    image: { type: String, default: '' },
    slug: { type: String, title: 'name', unique: true },
}, {
    timestamps: true,
}, );

module.exports = mongoose.model('Course', Course);