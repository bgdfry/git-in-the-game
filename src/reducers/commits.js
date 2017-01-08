const commits = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_COMMITS':
      return data
    default:
      return state;
  }
};

export default commits
