const INITIAL_STATE = {
    cssFlag: false,
    className: '',
    id: ''
}; 

function currentItemReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_ITEM':
        
            state.cssFlag = !state.cssFlag; 
            state.id = action.id;

            if (state.cssFlag === false) {
                state.className = 'Item-Wrapper';
            } else if (state.cssFlag === true) {
                state.className = 'Item-Wrapper2';
            }

            return {
                ...state
            }

        case 'SET_DEFAULT_VALUES': 
            
            state.cssFlag = false;
            state.className = '';
            state.id = '';

            return {
                ...state  
            }

        default: 
            return state; 
    }
}

export default currentItemReducer;