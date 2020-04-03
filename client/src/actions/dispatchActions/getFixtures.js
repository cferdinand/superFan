import axios from "axios";

const getFixtures = teamId => {
  return dispatch => {
    return axios
      .get(`/home/fixtures`)
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
