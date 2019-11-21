import axios from "axios";

const getTeams = () => {
  const leagueId = 2;
  return dispatch => {
    return axios
      .get(`/teams/${leagueId}`)
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
