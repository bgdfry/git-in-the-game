const username = (state = {}, action) => {
  const { type, username } = action;
  switch (type) {
    case 'USERNAME':
      return username;
  default:
    return state;
  }
};

export default username;
