const types = {
  USERNAME: 'USERNAME'
  GET_EVENTS: 'GET_EVENTS'
};

export const submitUserName = (inputVal) => {
  return {
    type: types.USERNAME,
    username: inputVal
  };
};

export const setStartDate = (mod, date) => {
  return {
    type: mod,
    data: date
  };
};

export const getEvents = (data) => {
    return {
      type: types.GET_EVENTS
      data: data
    }
  }
