const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f4_toidev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect susses......');
    } catch (error) {
        console.log('Connect fail!!!!!!!!');
    }
}

module.exports = { connect };
