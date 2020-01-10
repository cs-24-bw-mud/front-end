import axiosWithAuth from '../../utils/axiosWithAuth';

import {
    INIT_PLAYER_START,
    INIT_PLAYER_SUCCESS,
    INIT_PLAYER_ERROR,
    FETCH_MAP_START,
    FETCH_MAP_SUCCESS,
    FETCH_MAP_ERROR,
    MOVE_PLAYER_START,
    MOVE_PLAYER_SUCCESS,
    MOVE_PLAYER_ERROR
} from './Types';

export const initPlayer = () => {
    return dispatch => {
        dispatch({ type: INIT_PLAYER_START });
        axiosWithAuth('game')
            .get('/api/adv/init/')
            .then(res => {
                dispatch({ type: INIT_PLAYER_SUCCESS, payload: res });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: INIT_PLAYER_ERROR });
            })
    }
};

export const getMap = room => {
    return dispatch => {
        dispatch({ type: FETCH_MAP_START });
        axiosWithAuth('game')
            .get('/api/adv/rooms/')
            .then(res => {
                console.log("Actions",res);
                console.log("Actions", room)
                // extract x and y coordinates and set to state
                let coordinates = [];
                res.data.rooms.map((el, i) => {
                    const x = el[6];
                    const y = el[7];
                    let obj = { x: x, y: y, size: 10 }
                    if (el[0] === room) {
                        // obj.fill = '#3aece1'
                        // obj.size = 100
                        // obj.fill = 'white'
                        // obj.style = { ['outline-style']: 'inset' }
                        // obj.color = '#3aece1'
                    } else {
                        // obj.size = 10
                    }
                    coordinates.push(obj);
                })
                console.log("Actions", coordinates)
                res.coordinates = coordinates;
                dispatch({ type: FETCH_MAP_SUCCESS, payload: res });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_MAP_ERROR });
            })
    }
};

export const movePlayer = direction => {
    // will need to pass in a string (ex: 'n')
    console.log(direction);
    return dispatch => {
        dispatch({ type: MOVE_PLAYER_START });
        axiosWithAuth('game')
            .post('/api/adv/move/', { direction: direction })
            .then(res => {
                console.log(res);
                dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: MOVE_PLAYER_ERROR });
            })
    }
};