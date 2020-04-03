import axios from "axios";

const validateUser = (username, password) => {
  return axios
    .post("/login", { username, password })
    .then(() => {
      return true;
    })
    .catch(err => {
      alert(err.response.data);
      return false;
    });
};

export default validateUser;
