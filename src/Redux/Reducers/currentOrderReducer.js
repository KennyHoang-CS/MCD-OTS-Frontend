
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

            // add an existing stand-alone drink to a combo. 
            if (action.order.hasCombo === true) {
                
                // locate the existing stand-alone drink to insert into combo. 
                let soloDrinkFound = 
                state
                .order
                .findIndex( 
                    i => i.foodType === 'drink'
                );
                
                // existing stand-alone drink was found if it isn't -1. 
                if (soloDrinkFound !== -1) {
                    
                    // mark it false, since that order combo will have a drink. 
                    action.order.hasCombo = false;

                    // get the name of the drink that was found. 
                    let drink = state.order[soloDrinkFound].name;
                    
                    // if the drink has a count of 1, remove it. 
                    if (state.order[soloDrinkFound].count === 1) {
                        state.order.splice(soloDrinkFound, 1);
                    } else {    // if the drink has count > 1, then decrement. 
                        state.order[soloDrinkFound].count -= 1; 
                    }
                    return {
                        ...state,
                        order:  [
                            ...state.order, 
                            action.order,
                            action.order.drinkAlert = drink
                        ]
                    }
                }
            }
            

            // Check if an item combo needs a drink to be inserted. 
            if (action.order.foodType === 'drink') {
                
                // Find the combo item location for the drink to be inserted. 
                let drinkToInsertFound = 
                state
                .order
                .findIndex( 
                    i => i.hasCombo === true
                );
                
                if (drinkToInsertFound !== -1) {
                    
                    if (state.order[drinkToInsertFound].count > 1) {
                        
                        state.order[drinkToInsertFound].count -= 1;
                        // create new object. 
                        let newItem = {
                            count: 1,
                            drinkAlert: action.order.name,
                            hasCombo: false,
                            name: state.order[drinkToInsertFound].name
                        }

                        return {
                            ...state,
                            order:  [
                                ...state.order,
                                newItem
                            ]
                        }; 
                    } else {
                        state.order[drinkToInsertFound].hasCombo = false; 
                        state.order[drinkToInsertFound].drinkAlert = action.order.name;
                
                        return {
                            ...state,
                            order:  [
                                ...state.order 
                            ]
                        };   
                    }
                }
            }

            // Is there an duplicate item? If so, increment the item's count. 
            let found = state.order.findIndex(i => i.name === action.order.name);
            if (found !== -1) {

                if (action.order.count !== 1) {
                    state.order[found].count = action.order.count;
                } else {
                    state.order[found].count += action.order.count;
                }
                
                return {
                    ...state,
                    order:  [
                        ...state.order
                    ]
                }; 
            }

            // No duplicate items or drinkless combo items to be taken care of. 
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

