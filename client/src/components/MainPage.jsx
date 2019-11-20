import React from "react";
import ChooseTeams from "../containers/Teams.jsx";
import Fixtures from "../containers/FixturesContainer.jsx";
import Favorite from "../containers/FavoriteContainer.jsx";

const MainPage = () => {
  return (
    <div>
      <div>
        <Fixtures />
      </div>
      <div>
        <ChooseTeams />
      </div>
      <div>
        <Favorite />
      </div>
    </div>
  );
};

export default MainPage;
