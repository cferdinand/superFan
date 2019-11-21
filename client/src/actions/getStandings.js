import axios from "axios";
import { hostUrl } from "../../../config.json";

const getStandings = () => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`${hostUrl}/home/standings/${leagueId}`)
      .then(({ data }) => {
        dispatch({
          type: "STANDINGS",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getStandings;
