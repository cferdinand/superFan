const addFavorite = team => {
  return dispatch => {
    dispatch({
      type: "FAVORITE",
      payload: team
    });
  };
};

export default addFavorite;
