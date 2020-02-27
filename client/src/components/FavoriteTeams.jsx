import React from "react";

const FavoriteTeams = ({ favoriteTeam, loggedIn }) => {
  //TODO: If logged in check the database for the favorite team
  if (loggedIn !== 0) {
    getFavorite();
  }
  return (
    <div className="favorite_team">
      <div className="sumn">
        <h4 className="favorite_team_heading">Favorite Team(s)</h4>
        <img src={favoriteTeam.logo} className="favorite_teamlogo" />
        <p className="favorite_team_name ">{favoriteTeam.name}</p>
      </div>
    </div>
  );
};

export default FavoriteTeams;
