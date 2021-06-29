
const INITIAL_STATE = [{
    menu: [],
    answers: [],
    customerAnswer: []     
}]; 

function customersReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'LOAD_CUSTOMERS':
            
            return {
                ...state, menu: action.menu
            }

        case 'LOAD_ANSWERS':
            
            return {
                ...state, answers: action.menu 
            }

        case 'GET_CUSTOMER_ANSWER':

            return {
                ...state, 
                customerAnswer: state.answers.filter(a => a.id === action.id)
            }
        

        default: 
            return state; 
    }
}

export default customersReducer;