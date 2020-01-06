import axiosWithAuth from '../utils/axiosWithAuth';
import {types} from './index'

const {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} = types;

export const loginUser = (data, history) => {
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
