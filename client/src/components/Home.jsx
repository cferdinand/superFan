import React, { useEffect } from "react";
import Standings from "../containers/StandingsContainer.jsx";
import Fixtures from "../containers/FixturesContainer.jsx";
import Favorite from "../containers/FavoriteContainer.jsx";
import Highlights from "../containers/HighlightsContainer.jsx";
import Nav from "./Nav.jsx";

const MainPage = ({ getFavorite, getFixtures, getStandings }) => {
  useEffect(() => {
    getFixtures();
    getStandings();
    getFavorite();
  }, []);

  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <div className="mainpage">
        <div className="main_widgets">
          <div className="favorite_main">
            <Favorite />
          </div>
          <div className="fixtures_highlights">
            <div className="fixtures_main">
              <Fixtures />
            </div>
            <div className="highlights_main">
              <Highlights />
            </div>
          </div>
        </div>
        <div className="standings_main">
          <Standings />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
