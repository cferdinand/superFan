import React, { useEffect } from "react";

const Fixtures = ({ favoriteTeam, fixtures, getHighlights }) => {
  const FixtureList = () => {
    if (Object.keys(fixtures).length !== 0) {
      return fixtures.map(match => {
        let date = match.event_date.substr(0, match.event_date.indexOf("T"));
        let homeTeam = match.homeTeam.team_name;
        let awayTeam = match.awayTeam.team_name;
        let matchUp = `${homeTeam} v. ${awayTeam}`;
        return (
          <tr
            onClick={() => {
              getHighlights(matchUp);
            }}
            className="fixtures_row"
          >
            <td className="matchup">
              <div className="fixture_team">
                <img
                  src={match.homeTeam.logo}
                  className="fixtures_teamlogo"
                ></img>
                <p className="fixtures_team_name">{homeTeam}</p>
              </div>
              <span>{match.goalsHomeTeam}</span>
              <div className="matchupStatus">
                <span>{match.statusShort}</span>
                <p>vs</p>
              </div>
              <span>{match.goalsAwayTeam}</span>
              <div className="fixture_team">
                <img
                  src={match.awayTeam.logo}
                  className="fixtures_teamlogo"
                ></img>
                <p className="fixtures_team_name">{awayTeam}</p>
              </div>
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
      <table className="fixtures_table">
        <FixtureList />
      </table>
    </div>
  );
};

export default Fixtures;
