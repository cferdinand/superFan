import axios from "axios";
import { hostUrl } from "../../../config.json";

const getFixtures = ([teamId]) => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`${hostUrl}/fixtures/${teamId}/${leagueId}`)
      .then(({ data }) => {
        dispatch({
          type: "FIXTURES",
          payload: data.fixtures
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getFixtures;
