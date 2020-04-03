const router = require("express").Router();
const { serveStaticFile } = require("../lib/serveIndex.js");
const Auth = require("../middleware/auth.js");
const controllers = require("../controllers/index.js");

/*
Routes for user interactions
*/
router.post("/login", controllers.Users.getExistingUser);
router.post("/teams/favorite", controllers.Users.addFavorite);
router.get("/home/favorite", controllers.Users.getFavoriteTeam);
router.post("/signup", controllers.Users.addUser);
router.post("/logout", controllers.Users.logout);
/*
Routes to api requests to get team, fixture and standings information
*/
router.get("/home/fixtures", controllers.APIs.getFixtures);
router.get("/home/standings/:leagueId", controllers.APIs.getStandings);
router.get("/home/highlights", controllers.APIs.getHighlights);
router.get("/teams/:leagueId", controllers.APIs.getTeams);

/*
Routes to serve the file after authentication
*/
router.get("/login", Auth.isLoggedIn, serveStaticFile);
router.get("/signup", Auth.isLoggedIn, serveStaticFile);
router.get("/home", Auth.verifySession, serveStaticFile);
router.get("/teams", Auth.verifySession, serveStaticFile);

// catch all route
router.get("*", Auth.verifySession, serveStaticFile);

module.exports = router;
