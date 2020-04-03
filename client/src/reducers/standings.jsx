const standings = (state = null, action) => {
  switch (action.type) {
    case "STANDINGS":
      return action.payload;
    default:
      return state;
  }
};

export default standings;
