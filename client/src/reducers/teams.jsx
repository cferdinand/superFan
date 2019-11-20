const teams = (state = {}, action) => {
  switch (action.type) {
    case "TEAMS":
      return action.payload;
    default:
      return state;
  }
};

export default teams;
