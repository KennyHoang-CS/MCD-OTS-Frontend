
const INITIAL_STATE = {
    order: []
}; 

function currentOrderReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_CURRENT_ORDER_MENU':
            return {
                ...state, order: action.order
            }
        case 'ADD_TO_CURRENT_ORDER':
            
            let found = state.order.findIndex(i => i.name === action.order.name);

            if (found !== -1) {
                //alert(state.order[found].name);
                state.order[found].count += 1;
                
                return {
                    ...state,
                    order:  [
                        ...state.order
                    ]
                }; 
            }
        
            return {
                ...state,
                order: [
                    ...state.order, action.order
                ]
            }
        default: 
            return state; 
    }
}

export default currentOrderReducer;

