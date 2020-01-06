

const {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
}


const initialState = {
    token: '',
    user: [],
    isAuth: !!localStorage.getItem("token"),
    isLoading: false,
    isSuccess: false,
    error: "",
};

const loginReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN_START:
            return {
                ...state,
                error: "",
                isLoading: true
            };
            case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                isAuth: true,
                isLoading: false,
                token: payload.token,
                isSuccess: true
            };
            case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
            default:
                return state;
    }
};

export default loginReducer;