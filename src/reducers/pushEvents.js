const pushEvents = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_PUSH_EVENTS':
      return data
    default:
      return state;
  }
};

export default pushEvents;
