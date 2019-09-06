// import * as Types from "../actions/types";

const initialState = {
    userData: {},
    students: {},
    error: "",
    loginStatus: false
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case 'LOGIN_ASYNC':
            console.log('login reducer');
            return {
                ...state,
                userData: action.payload,
                loginStatus: true
            }
        
        case 'LOGIN_ERROR_ASYNC':
            console.log('login error reducer');
            return {
              ...state,
              error: 'Invalid Username/Password',
              loginStatus: false
            }

        case 'GET_USER_ASYNC':
            console.log('get user reducer');
            return {
                ...state
            }

        case 'LOGOUT_ASYNC':
            console.log('logout reducer');
            return {
                ...state,
                userData: action.payload,
                loginStatus: false
            }

        case 'ADD_STUDENT_ASYNC':
            console.log('Add student reducer');
            return {
                ...state,
                students: action.payload
            }

        default :
            return state;

    }

};

export default reducer;