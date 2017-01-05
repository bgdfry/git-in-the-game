const username = (state = {}, action) => {
  switch (action.type) {
    case 'USERNAME':
      return { username: action.username };
  default:
    return state;
  }
};

export default username;
