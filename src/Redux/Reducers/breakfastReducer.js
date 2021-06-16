const INITIAL_STATE = [{
    menu: []
}]; 

function breakfastReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_BREAKFAST_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default breakfastReducer;