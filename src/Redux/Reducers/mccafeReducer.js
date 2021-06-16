const INITIAL_STATE = [{
    menu: []
}]; 

function mccafeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_MCCAFE_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default mccafeReducer;