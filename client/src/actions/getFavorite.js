import axios from "axios";

const getFavorite = () => {
  return dispatch => {
    return axios.get("/home/favorite").then(({ data }) => {
      dispatch({
        type: "FAVORITE",
        payload: data
      });
    });
  };
};

export default getFavorite;
