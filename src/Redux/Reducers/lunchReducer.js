const INITIAL_STATE = [{
    menu: []
}]; 

function lunchReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_LUNCH_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default lunchReducer;