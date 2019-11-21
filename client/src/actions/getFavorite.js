import axios from "axios";

const getFavorite = (team, user) => {
  return dispatch => {
    return axios.get("/teams/favorite").then(() => {
      dispatch({
        type: "FAVORITE",
        payload: team
      });
    });
  };
};

export default getFavorite;
