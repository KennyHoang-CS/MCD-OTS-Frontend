const INITIAL_STATE = [{
    menu: []
}]; 

function lunch2Reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_LUNCH2_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default lunch2Reducer;