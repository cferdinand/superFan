import React from "react";

export const FavoriteTeams = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={favorite.logo} />
          </td>
          <td>
            <p>{favorite.name}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};
