const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { auth: action.data };
    case 'LOGOUT':
      return { auth: action.data };
    case 'USERNAME':
      return { username: action.username };
  default:
    return state;
  }
};

export default auth;
