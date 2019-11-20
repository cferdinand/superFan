import React, { useEffect } from "react";
// import getTeams from "../actions/getTeams.js";

const ChooseTeam = ({ teams, allTeams }) => {
  useEffect(() => {
    teams();
  }, []);
  const TeamsTable = () => {
    if (Object.keys(allTeams).length !== 0) {
      return allTeams.map(team => {
        return (
          <td>
            <img src={team.logo} />
            <p>{team.name}</p>
          </td>
        );
      });
    } else {
      return "";
    }
  };
  const addTeam = () => {
    //TODO: add team action and reducer
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
