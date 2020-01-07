import axiosWithAuth from '../../utils/axiosWithAuth';

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './Types';

export const userLogin = (data, history) => {
    return dispatch => {
        dispatch({type: LOGIN_START});
        return axiosWithAuth()
        .post('auth/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            //this needs to push to game page
            history.push('/')
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
    }
}

export const userRegister = data => dispatch => {
    dispatch({type: REGISTER_START});
    return axiosWithAuth()
        .post('/auth/register', data)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data});
            //this needs to push to game page
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err});
        });
};

