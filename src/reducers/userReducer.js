import { GET_USER, LOGIN, LOGIN_ERROR, LOGOUT } from '../actions/types';

const initialState = {
    userData: {},
    error: "",
    loginStatus: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
          console.log('user reducer for login');
            return {
                ...state,
                userData: action.payload,
                loginStatus: true
            }
        case LOGIN_ERROR:
          console.log('user reducer for login error');
          return {
              ...state,
              error: action.payload.error,
              loginStatus: false
          }
        case GET_USER:
          console.log('user reducer to get user');
          return {
            ...state
          }
        case LOGOUT:
          console.log('user reducer to logout');
          return {
            ...state,
            userData: action.payload,
            loginStatus: false
          }
        default:
            return state;
    }
}
