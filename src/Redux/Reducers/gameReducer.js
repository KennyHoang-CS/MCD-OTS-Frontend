
const INITIAL_STATE = {
    customerIdx: -1,
    gameStatus: false,
    correctOrders: 0,
    wrongOrders: 0,
    time: 0
}; 

function gameReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        
        case 'NEXT_CUSTOMER':
            
            ++state.customerIdx;

            return {
                ...state
            }

        case 'TOGGLE_GAME_STATUS':

            state.gameStatus = action.flag;

            return {
                ...state 
            }

        case 'INCREMENT_CORRECT_ORDER': 

            ++state.correctOrders; 

            return {
                ...state
            }

        case 'INCREMENT_WRONG_ORDER':

            ++state.wrongOrders;

            return {
                ...state 
            }
    
        case 'SET_TIME': 

            console.log('action time: ', action)

            state.time = action.time;

            return {
                ...state
            }

        default: 
            return state; 
    }
}

export default gameReducer;

