const favorite = (state = {}, action) => {
  switch (action.type) {
    case "FAVORITE":
      return action.payload;
    default:
      return state;
  }
};

export default favorite;
