const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  USERNAME: 'USERNAME'
};

export const loginUser = () => {
  return {
    type: 'LOGIN',
    data: true
  };
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT,
    data: false
  };
};

export const submitUserName = (username) => {
  return {
    type: types.USERNAME,
    username: username
  };
};

export const setStartDate = (mod, date) => {
  return {
    type: mod,
    data: date
  };
};
