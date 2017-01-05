const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

export const loginUser = () => {
  return {
    type: 'LOGIN',
    data: true
  }
}

export const logoutUser = () => {
  return {
    type: types.LOGOUT,
    data: false
  }
}

export const setStartDate = (mod, date) => {
  return {
    type: mod,
    data: date
  }
}
