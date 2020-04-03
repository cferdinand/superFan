import axios from "axios";

const addFavorite = team => {
  return axios.post(`/teams/favorite`, { team });
};

export default addFavorite;
