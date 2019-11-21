import React, { useEffect } from "react";

const Fixtures = ({ favoriteTeam, getFixtures, fixtures, getHighlights }) => {
  useEffect(() => {
    if (favoriteTeam !== undefined) {
      getFixtures([favoriteTeam]);
    }
  }, [favoriteTeam]);

  const FixtureList = () => {
    if (Object.keys(fixtures).length !== 0) {
      return fixtures.map(match => {
        let date = match.event_date.substr(0, match.event_date.indexOf("T"));
        let homeTeam = match.homeTeam.team_name;
        let awayTeam = match.awayTeam.team_name;
        let matchUp = `${homeTeam} v. ${awayTeam} ${date}`;
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
              <p>vs</p>
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
