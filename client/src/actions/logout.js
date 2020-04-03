import axios from "axios";

const logoutUser = () => {
  return axios
    .post(`/logout`)
    .then(() => {
      return true;
    })
    .catch(err => {
      console.error(err);
    });
};

export default logoutUser;
