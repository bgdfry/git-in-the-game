const weeklyCommits = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'PARSE_COMMITS':
      return data;
    default:
      return state;
  }
};

export default weeklyCommits;
