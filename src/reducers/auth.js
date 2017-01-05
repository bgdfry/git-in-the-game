const auth = (state = {}, action) => {
  console.log('reducers', action.value );
  switch (action.type) {
    case 'LOGIN':
      return { auth: action.data };
    case 'LOGOUT':
      return { auth: action.data };
    case 'USERNAME':
      return { username: action.value };
  default:
    return state;
  }
};

export default auth;
