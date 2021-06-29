const INITIAL_STATE = [{
    rankings: []
}]; 

function leaderboardReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_LEADERBOARD':
            return {
                ...state, rankings: action.menu
            }
        default: 
            return state; 
    }
}

export default leaderboardReducer;