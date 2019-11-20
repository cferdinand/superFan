import axios from "axios";
import { hostUrl } from "../../../config.json";

const getTeams = () => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`${hostUrl}/teams/${leagueId}`)
      .then(({ data }) => {
        dispatch({
          type: "TEAMS",
          payload: data.teams
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getTeams;