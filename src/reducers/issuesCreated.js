const issuesCreated = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_ISSUES_CREATED':
      return data
    default:
      return state;
  }
};

export default issuesCreated;
