const INITIAL_STATE = {
    message: ''
};

function alertMessageReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
            
        case 'SET_MESSAGE': 
            return {
                ...state,
                message: action.message 
            };

        default:
            return state; 
    }
}

export default alertMessageReducer;