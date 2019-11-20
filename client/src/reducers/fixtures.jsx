const fixtures = (state = {}, action) => {
  switch (action.type) {
    case "FIXTURES":
      return action.payload;
    default:
      return state;
  }
};

export default fixtures;
