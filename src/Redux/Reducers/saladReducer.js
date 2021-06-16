const INITIAL_STATE = [{
    menu: []
}]; 

function saladReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_SALAD_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default saladReducer;