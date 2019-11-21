import axios from "axios";
import { hostUrl } from "../../../config.json";

const getHighlights = match => {
  return dispatch => {
    return axios
      .get(`${hostUrl}/home/highlights?match=${match}`)
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
