const router = require("express").Router();
const {
  getTeams,
  getFixtures,
  getHighlights,
  getStandings,
  addFavorites
} = require("../controllers/controllers.js");

router.get("/fixtures", getFixtures);
router.get("/standings", getStandings);
router.get("/highlights", getHighlights);
router.get("/teams", getTeams);
router.post("/favorite", addFavorites);
