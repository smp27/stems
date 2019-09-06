import * as Types from './types';

export const loginuser = (userData) => ({
    type: Types.LOGIN,
    payload: userData
})

export const getuser = () => ({
    type: Types.GET_USER
})

export const loginerror = () => ({
    type: Types.LOGIN_ERROR
})

export const logout = () => ({
    type: Types.LOGOUT
})

export const addStudent = (studentData) => ({
    type: Types.ADD_STUDENT,
    payload: studentData
})