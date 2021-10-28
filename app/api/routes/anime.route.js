const express = require("express");
const router = express.Router();

const{getAnimeById,getAllAnime,createAnime}=require("../controllers/anime.controller");

router.post("/create", createAnime);
router.get("/", getAllAnime);
router.get("/:animeId", getAnimeById);

module.exports = router;