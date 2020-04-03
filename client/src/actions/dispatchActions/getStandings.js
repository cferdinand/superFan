import axios from "axios";

const getStandings = () => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`/home/standings/${leagueId}`)
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
