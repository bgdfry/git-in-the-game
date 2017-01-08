const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS',
  GET_PUSH_EVENTS: 'GET_PUSH_EVENTS',
  GET_OPENED_PULL_REQUESTS: 'GET_OPENED_PULL_REQUESTS',
  GET_ISSUES_CREATED: 'GET_ISSUES_CREATED',
  GET_ISSUES_CLOSED: 'GET_ISSUES_CLOSED',
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

export const getIssuesCreated = (data) => {
    return {
      type: types.GET_ISSUES_CREATED,
      data: data
    };
  };

export const getIssuesClosed = (data) => {
    return {
      type: types.GET_ISSUES_CLOSED,
      data: data
    };
  };
