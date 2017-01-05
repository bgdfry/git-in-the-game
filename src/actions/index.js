const types = {
  USERNAME: 'USERNAME'
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
