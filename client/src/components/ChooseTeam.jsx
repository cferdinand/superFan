import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ChooseTeam = ({ teams, allTeams, favorite }) => {
  useEffect(() => {
    teams();
  }, []);

  //TODO: add a favorite team to the database on click

  const TeamsTable = () => {
    if (Object.keys(allTeams).length !== 0) {
      return allTeams.map(team => {
        return (
          <td className="teamrow">
            <Link to="/home">
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
            </Link>
          </td>
        );
      });
    } else {
      return "";
    }
  };
  const addTeam = team => {
    favorite(team);
  };
  return (
    <div className="teamchooser_main">
      <table className="teamChooserTable">
        <TeamsTable />
      </table>
    </div>
  );
};

export default ChooseTeam;
