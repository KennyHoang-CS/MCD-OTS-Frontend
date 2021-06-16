const INITIAL_STATE = [{
    menu: []
}]; 

function happyMealReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_HAPPY_MEAL_MENU':
            return {
                ...state, menu: action.menu
            }
        default: 
            return state; 
    }
}

export default happyMealReducer;