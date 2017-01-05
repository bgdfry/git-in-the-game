
let initialState = {
  mod1start: '',
  mod2start: '',
  mod3start: '',
  mod4start: ''
}

const modStartDates = (state = initialState, action) => {
  switch (action.type) {
    case 'MOD1':
      return { ...initialState, mod1start: action.data };
    case 'MOD2':
      return { ...initialState, mod2start: action.data };
    case 'MOD3':
      return { ...initialState, mod3start: action.data };
    case 'MOD4':
      return { ...initialState, mod4start: action.data };
  default:
    return state;
  }
};

export default modStartDates;
