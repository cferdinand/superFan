import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import addFavorite from "../actions/addFavorite.js";
import Nav from "../containers/NavContainer.jsx";

const ChooseTeam = ({ teams, allTeams }) => {
  useEffect(() => {
    teams();
  }, []);

  const addTeam = team => {
    addFavorite(team);
  };

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

  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <div className="teamchooser_main">
        <table className="teamChooserTable">
          <TeamsTable />
        </table>
      </div>
    </div>
  );
};

export default ChooseTeam;
