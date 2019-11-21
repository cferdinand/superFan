const router = require("express").Router();
const {
  getTeams,
  getFixtures,
  getHighlights,
  getStandings,
  addFavorites,
  getExistingUser,
  addUser
} = require("../controllers/controllers.js");

router.get("/users", getExistingUser);
router.get("/fixtures/:teamId/:leagueId", getFixtures);
router.get("/standings/:leagueId", getStandings);
router.get("/highlights", getHighlights);
router.get("/:leagueId", getTeams);
router.post("/favorite", addFavorites);
router.post("/users", addUser);

module.exports = router;
