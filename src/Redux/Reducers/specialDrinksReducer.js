const INITIAL_STATE = [{
    menu: []
}];

function specialDrinksReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_SPECIAL_DRINKS_MENU': 
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default specialDrinksReducer;