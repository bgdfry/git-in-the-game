const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS',
  GET_PUSH_EVENTS: 'GET_PUSH_EVENTS',
  GET_OPENED_PULL_REQUESTS: 'GET_OPENED_PULL_REQUESTS',
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


  export const getPushEvents = (data) => {
      return {
        type: types.GET_PUSH_EVENTS,
        data: data
      };
    };

    export const getOpenedPullRequests = (data) => {
        return {
          type: types.GET_OPENED_PULL_REQUESTS,
          data: data
        };
      };
