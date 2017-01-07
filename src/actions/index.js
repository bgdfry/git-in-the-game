const types = {
  USERNAME: 'USERNAME'
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
