const highlights = (state = 0, action) => {
  switch (action.type) {
    case "HIGHLIGHTS":
      return action.payload;
    default:
      return state;
  }
};

export default highlights;
