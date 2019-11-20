import React, { useEffect } from "react";

const Fixtures = ({ favoriteTeam, getFixtures, fixtures }) => {
  useEffect(() => {
    if (favoriteTeam !== undefined) {
      getFixtures([favoriteTeam]);
    }
  }, [favoriteTeam]);

  const FixtureList = () => {
    if (Object.keys(fixtures).length !== 0) {
      return fixtures.map(match => {
        return (
          <tr>
            <td>
              <div>
                <img src={match.homeTeam.logo}></img>
                <p>{match.homeTeam.team_name}</p>
              </div>
              <p>Vs</p>
              <div>
                <img src={match.awayTeam.logo}></img>
                <p>{match.awayTeam.team_name}</p>
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
      <table>
        <FixtureList />
      </table>
    </div>
  );
};

export default Fixtures;
