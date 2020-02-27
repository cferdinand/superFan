const router = require("express").Router();
const { serveStaticFile } = require("../lib/serveIndex.js");
const Auth = require("../middleware/auth.js");
const controllers = require("../controllers/controllers.js");

/*
Routes to serve the file after authentication
*/
router.get("/login", serveStaticFile);
router.get("/home", Auth.verifySession, serveStaticFile);
router.get("/teams", Auth.verifySession, serveStaticFile);

/*
Routes to for user interactions
*/
router.post("/login", controllers.getExistingUser);
router.post("/favorite", controllers.addFavorites);
router.get("/favorite", controllers.getFavoriteTeam);
router.post("/signup", controllers.addUser);

/*
Routes to api requests to get team, fixture and standings information
*/
router.get("/fixtures/:teamId/:leagueId", controllers.getFixtures);
router.get("/standings/:leagueId", controllers.getStandings);
router.get("/highlights", controllers.getHighlights);
router.get("/:leagueId", controllers.getTeams);

module.exports = router;
