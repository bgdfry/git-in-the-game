const events = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_EVENTS':
      return data
    default:
      return state;
  }
};

export default events
