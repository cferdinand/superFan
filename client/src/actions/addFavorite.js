import axios from "axios";

const addFavorite = (team, user) => {
  return dispatch => {
    return axios.post(`/teams/favorite`, { team, user }).then(() => {
      dispatch({
        type: "FAVORITE",
        payload: team
      });
    });
  };
};

export default addFavorite;
