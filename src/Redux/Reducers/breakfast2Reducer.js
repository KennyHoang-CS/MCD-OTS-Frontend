const INITIAL_STATE = [{
    menu: []
}]; 

function breakfast2Reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_BREAKFAST2_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default breakfast2Reducer;