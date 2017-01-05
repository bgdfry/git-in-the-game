
const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { auth: action.data };
    case 'LOGOUT':
      return { auth: action.data };
  default:
    return state;
  }
};

export default auth;
