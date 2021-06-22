const INITIAL_STATE = {
    quantity: ''
};

function quantityReducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {

        case 'SET_QUANTITY': 

            let newQuantity
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