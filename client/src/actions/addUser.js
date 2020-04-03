import axios from "axios";

const addUser = (username, password) => {
  return axios
    .post(`/signup`, { username, password })
    .then(() => {
      return true;
    })
    .catch(err => {
      alert(err.response.data);
      return false;
    });
};

export default addUser;
