const INITIAL_STATE = [{
    menu: []
}]; 

function dessertReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_DESSERT_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default dessertReducer;