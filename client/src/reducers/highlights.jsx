const highlights = (state = null, action) => {
  switch (action.type) {
    case "HIGHLIGHTS":
      return action.payload;
    default:
      return state;
  }
};

export default highlights;
