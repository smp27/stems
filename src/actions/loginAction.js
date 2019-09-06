import { GET_USER, LOGIN, LOGIN_ERROR, LOGOUT } from './types';

export const loginuser = userData => dispatch => {
  console.log('login user action');
    const username = 'admin';
    const password = '123456';
    if(userData.username === username && userData.password === password) {
      dispatch({
          type: LOGIN,
          payload: userData
      })
    } else {
      dispatch({
          type: LOGIN_ERROR,
          payload: {
            error: 'Invalid Username/Password'
          }
      })
    }
}

export const getuser = () => dispatch => {
  console.log('get user action');
  dispatch({
    type: GET_USER
  })
}

export const logout = () => dispatch => {
  console.log('logout action');
  dispatch({
    type: LOGOUT,
    payload: {}
  })
}
