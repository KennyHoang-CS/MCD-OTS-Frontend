const INITIAL_STATE = [{
    menu: []
}];

function drinksReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_DRINKS_MENU': 
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default drinksReducer;