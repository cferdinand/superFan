const router = require("express").Router();
const {
  getTeams,
  getFixtures,
  getHighlights,
  getStandings,
  addFavorites
} = require("../controllers/controllers.js");

router.get("/fixtures/:teamId/:leagueId", getFixtures);
router.get("/standings/:leagueId", getStandings);
router.get("/highlights", getHighlights);
router.get("/:leagueId", getTeams);
router.post("/favorite", addFavorites);

module.exports = router;
