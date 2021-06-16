const INITIAL_STATE = [{
    menu: []
}]; 

function dessert2Reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_DESSERT2_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default dessert2Reducer;