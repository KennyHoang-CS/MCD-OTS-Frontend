const INITIAL_STATE = [{
    menu: []
}]; 

function lsmReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_LSM_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default lsmReducer;