import React from "react";

const FavoriteTeams = ({ favoriteTeam }) => {
  return (
    <div className="favorite_team">
      <img src={favoriteTeam.logo} className="favorite_teamlogo" />
      <p className="favorite_team_name ">{favoriteTeam.name}</p>
    </div>
  );
};

export default FavoriteTeams;
