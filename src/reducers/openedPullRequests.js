const openedPullRequests = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_OPENED_PULL_REQUESTS':
      return data
    default:
      return state;
  }
};

export default openedPullRequests;
