const issuesClosed = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_ISSUES_CLOSED':
      return data
    default:
      return state;
  }
};

export default issuesClosed;
