const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator");


const Course = new Schema(
    {
        name: { type: String },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
        level: { type: String },
        slug: { type: String, slug: "name" },
    },
    { timestamps: true }
);

mongoose.plugin(slug);

Course.plugin(mongoose_delete, {
    deleteAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model("Course", Course);
