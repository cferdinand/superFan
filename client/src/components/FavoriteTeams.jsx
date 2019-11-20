import React from "react";

const FavoriteTeams = ({ favoriteTeam }) => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={favoriteTeam.logo} />
          </td>
          <td>
            <p>{favoriteTeam.name}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FavoriteTeams;
