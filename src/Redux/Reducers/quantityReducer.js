
const INITIAL_STATE = {
    quantity: ''
};

function quantityReducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {

        case 'SET_QUANTITY': 
            
            let newQuantity
            if (state.quantity.length > 2) {
                
                state.quantity = '';
                return {
                    ...state,
                    quantity: state.quantity
                };
            }
            if (action.quantity !== '') {
                newQuantity = state.quantity;
                newQuantity += action.quantity;
            }

            return {
                ...state,
                quantity: newQuantity || action.quantity
            };

        default:
            return state; 
    }
}

export default quantityReducer;