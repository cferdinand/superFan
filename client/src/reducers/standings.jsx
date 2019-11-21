const standings = (state = 0, action) => {
  switch (action.type) {
    case "STANDINGS":
      return action.payload;
    default:
      return state;
  }
};

export default standings;
