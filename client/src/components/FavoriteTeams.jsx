import React from "react";

export const FavoriteTeams = () => {
  return (
    <div>
      <table>
        <td>
          <img src={favorite.logo} />
          <p>{favorite.name}</p>
        </td>
      </table>
    </div>
  );
};
