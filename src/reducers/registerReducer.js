import {types} from "../actions/index";

const {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} = types


const initialState = {
    isLoading: false,
    users: [],
    error: "",
};

const registerReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case REGISTER_START:
            return {
                ...state,
                error: "",
                isLoading: true
            };
            case REGISTER_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                users: [...state.users, payload],
            };
            case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
            default:
                return state;
    }
};

export default registerReducer;