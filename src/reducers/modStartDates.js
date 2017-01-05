
const modStartDates = (state = {}, action) => {
  switch (action.type) {
    case 'MOD1':
      return { ...state, mod1: action.data };
    case 'MOD2':
      return { ...state, mod2: action.data };
    case 'MOD3':
      return { ...state, mod3: action.data };
    case 'MOD4':
      return { ...state, mod4: action.data };
  default:
    return state;
  }
};

export default modStartDates;
