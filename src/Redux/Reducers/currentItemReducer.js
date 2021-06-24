const INITIAL_STATE = {
    cssFlag: false,
    className: '',
    name: ''
}; 

function currentItemReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_ITEM':
            
            state.cssFlag = !state.cssFlag; 
            state.name = action.name; 

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
            state.name = '';

            return {
                ...state  
            }

        default: 
            return state; 
    }
}

export default currentItemReducer;