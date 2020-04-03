import axios from "axios";

const logoutUser = () => {
  return dispatch => {
    return axios
      .post(`/logout`)
      .then(() => {
        dispatch({
          type: "USER_LOGGED_OUT"
        });
        return true;
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default logoutUser;
