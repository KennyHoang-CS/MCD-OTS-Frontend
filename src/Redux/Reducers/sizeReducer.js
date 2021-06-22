const INITIAL_STATE = {
    size: ''
};

function sizeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
            
        case 'SET_SIZE': 
            return {
                ...state,
                size: action.name 
            };

        default:
            return state; 
    }
}

export default sizeReducer;