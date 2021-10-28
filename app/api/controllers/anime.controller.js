const Anime=require("../models/Anime.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");


const createAnime = async (req, res, next) => {
    try {
        const newAnime = new Anime();
        newAnime.name = req.body.name;
        newAnime.studio = req.body.studio;
        newAnime.poster = req.body.poster;
        newAnime.year = req.body.year;
        const AnimeDb = await newAnime.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { anime: AnimeDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllAnime = async (req, res, next) => {
    try {

            const anime = await Anime.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { anime:anime }
            });
        } catch (error) {
        return next(error)
    }
}


const getAnimeById = async (req, res, next) => {
    try {
        const { animeId } = req.params;
        const animeById = await Anime.findById(animeId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { anime: animeById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports={getAnimeById,getAllAnime,createAnime};