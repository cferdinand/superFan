import React, { useEffect } from "react";
import getTeams from "../actions/getTeams.js";

const ChooseTeam = teams => {
  useEffect(() => {
    getTeams();
  });

  return <div></div>;
};

export default ChooseTeam;
