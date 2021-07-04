
const INITIAL_STATE = {
    customerIdx: -1,
    gameStatus: false,
    time: 0,
    formattedTime: '',
    gamePlayed: false 
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
    
        case 'SET_GAME_PLAYED':

            state.gamePlayed = action.flag;

            return {
                ...state 
            }

        case 'SET_TIME': 

            state.time = action.time;

            return {
                ...state
            }

        case 'SET_FORMATTED_TIME': 

            state.formattedTime = action.formattedTime;

            return {
                ...state
            }

        case 'RESET_GAME': 
            
            state.customerIdx = -1;
            state.gameStatus = false;
    
            return {
                ...state
            }

        default: 
            return state; 
    }
}

export default gameReducer;

