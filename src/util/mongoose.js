module.exports = {
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map((course) => course.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
