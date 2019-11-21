import axios from "axios";

const getHighlights = match => {
  return dispatch => {
    return axios
      .get(`/home/highlights?match=${match}`)
      .then(data => {
        dispatch({
          type: "HIGHLIGHTS",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getHighlights;
