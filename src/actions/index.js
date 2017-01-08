const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS',
  GET_PUSH_EVENT: 'GET_PUSH_EVENT',
};

export const submitUserName = (inputVal) => {
  return {
    type: types.USERNAME,
    username: inputVal
  };
};

export const getEvents = (data) => {
    return {
      type: types.GET_EVENTS,
      data: data
    };
  };


  export const getPushEvent = (data) => {
      return {
        type: types.GET_PUSH_EVENT,
        data: data
      };
    };
