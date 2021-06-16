const INITIAL_STATE = [{
    menu: []
}]; 

function condimentsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_CONDIMENTS_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default condimentsReducer;