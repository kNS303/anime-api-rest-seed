const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema(
    {
        name: { type: String, require: true },
        studio: { type: String, require: true },
        poster: { type: String, require: true },
        year: { type: Number, require: true }
    },
    { timestamps: true }
);

const Anime = mongoose.model("anime", AnimeSchema);
module.exports = Anime;