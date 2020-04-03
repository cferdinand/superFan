import React from "react";

const Standings = ({ standings }) => {
  const StandingsList = () => {
    if (standings !== 0) {
      return standings.map(team => {
        return (
          <tr className="standings_teamrow">
            <td className="standings_team">
              <div className="standings_teamInfo">
                <p className="standings_position">{`${team.rank}.`}</p>
                <img src={team.logo} className="standings_teamlogo"></img>
                <p className="standings_teamName">{team.teamName}</p>
              </div>
            </td>
            <td className="standings_stats">
              <p>{team.all.matchsPlayed}</p>
            </td>
            <td className="standings_stats">
              <p>{team.all.win}</p>
            </td>
            <td className="standings_stats">
              <p>{team.all.draw}</p>
            </td>
            <td className="standings_stats">
              <p>{team.all.lose}</p>
            </td>
            <td className="standings_stats">
              <p>{team.all.goalsFor}</p>
            </td>
            <td className="standings_stats">
              <p>{team.all.goalsAgainst}</p>
            </td>
          </tr>
        );
      });
    } else {
      return "";
    }
  };

  return (
    <div>
      <table className="standings_table">
        <thead>
          <tr>
            <th colspan="1">
              <p className="header team_name">Team Name</p>
            </th>
            <th colspan="1">
              <p>MP</p>
            </th>
            <th colspan="1">
              <p>W</p>
            </th>
            <th colspan="1">
              <p>D</p>
            </th>
            <th colspan="1">
              <p>L</p>
            </th>
            <th colspan="1">
              <p>GF</p>
            </th>
            <th colspan="1">
              <p>GA</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <StandingsList />
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
