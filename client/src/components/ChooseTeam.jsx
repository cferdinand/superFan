import React, { useEffect } from "react";

const ChooseTeam = ({ teams, allTeams, favorite }) => {
  useEffect(() => {
    teams();
  }, []);
  const TeamsTable = () => {
    if (Object.keys(allTeams).length !== 0) {
      return allTeams.map(team => {
        return (
          <td>
            <img
              src={team.logo}
              onClick={() => {
                addTeam(team);
              }}
            />
            <p
              onClick={() => {
                addTeam(team);
              }}
            >
              {team.name}
            </p>
          </td>
        );
      });
    } else {
      return "";
    }
  };
  const addTeam = team => {
    favorite([team]);
  };
  return (
    <div>
      <table>
        <TeamsTable />
      </table>
    </div>
  );
};

export default ChooseTeam;
