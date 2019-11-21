import axios from "axios";

const getFixtures = teamId => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`/home/fixtures/${teamId}/${leagueId}`)
      .then(({ data }) => {
        dispatch({
          type: "FIXTURES",
          payload: data.api.fixtures
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getFixtures;
