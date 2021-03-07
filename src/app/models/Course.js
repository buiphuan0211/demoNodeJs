const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    discription: { type: String, default: '' },
    image: { type: String, default: '' },
    createDate: { type: Date, default: Date.now() },
    updateDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Course', Course);
