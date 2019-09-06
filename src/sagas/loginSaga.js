import { takeLatest, put } from 'redux-saga/effects';
import * as Types from '../actions/types';

function* loginAsync(action) {
    console.log('login saga');
    yield put({
        type: 'LOGIN_ASYNC', 
        payload: action.payload
    });
}

function* getUserAsync() {
    console.log('get user saga');
    yield put({
        type: 'GET_USER_ASYNC'
    });
}

function* loginErrorAsync() {
    console.log('login error saga');
    yield put({
        type: 'LOGIN_ERROR_ASYNC'
    });
}

function* logoutAsync(action) {
    console.log('logout saga');
    yield put({
        type: 'LOGOUT_ASYNC'
    });
}

function* addStudentAsync(action) {
    console.log('Add student saga');
    yield put({
        type: 'ADD_STUDENT_ASYNC',
        payload: action.payload
    })
}

export function* rootSaga() {
    yield takeLatest(Types.LOGIN, loginAsync)
    yield takeLatest(Types.GET_USER, getUserAsync)
    yield takeLatest(Types.LOGIN_ERROR, loginErrorAsync)
    yield takeLatest(Types.LOGOUT, logoutAsync)
    yield takeLatest(Types.ADD_STUDENT, addStudentAsync)
}