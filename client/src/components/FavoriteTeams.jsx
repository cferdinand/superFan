import React from "react";

const FavoriteTeams = ({ favoriteTeam }) => {
  return (
    <div className="favorite_team">
      <div className="sumn">
        <h4 className="favorite_team_heading">Favorite Team(s)</h4>
        <img src={favoriteTeam.favorite_logo} className="favorite_teamlogo" />
        <p className="favorite_team_name ">{favoriteTeam.favorite_name}</p>
      </div>
    </div>
  );
};

export default FavoriteTeams;
