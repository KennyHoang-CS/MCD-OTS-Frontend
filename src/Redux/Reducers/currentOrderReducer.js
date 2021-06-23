
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
                    
                    // 2 solo drinks vs 3 upcoming combo meals. 
                    if (state.order[soloDrinkFound].count < action.order.count) {
        
                        let newCount = action.order.count - state.order[soloDrinkFound].count;

                        let newItem = {
                            name: action.order.name,
                            drinkAlert: state.order[soloDrinkFound].name,
                            count: state.order[soloDrinkFound].count,
                            hasCombo: false
                        };

                        let extraItem = {
                            name: action.order.name,
                            drinkAlert: action.order.drinkAlert,
                            count: newCount,
                            hasCombo: true
                        }
                        
                        state.order.splice(soloDrinkFound, 1);
                    
                        return {
                            ...state,
                            order: [
                                ...state.order,
                                newItem,
                                extraItem
                            ]
                        }
                    }

                    // mark it false, since that order combo will have a drink. 
                    action.order.hasCombo = false;

                    // get the name of the drink that was found. 
                    let drink = state.order[soloDrinkFound].name;
                    
                    // if the drink has a count of 1, remove it. 
                    if (state.order[soloDrinkFound].count === 1) {
                        state.order.splice(soloDrinkFound, 1);
                    } else {    
                        // solo drinks > upcoming combo meals: 3 cokes vs 2 meals
                        if (state.order[soloDrinkFound].count < action.order.count) {
                            state.order[soloDrinkFound].count -= action.order.count;
                        } else { // decrement drink count if upcoming meal is 1. 
                            state.order[soloDrinkFound].count -= 1; 
                        }
                    }
                    alert('lol')
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
            

            // Check if an existing item combo needs a drink to be inserted. 
            if (action.order.foodType === 'drink') {
                
                // Find the combo item location for the drink to be inserted. 
                let drinkToInsertFound = 
                state
                .order
                .findIndex( 
                    i => i.hasCombo === true
                );
                
                if (drinkToInsertFound !== -1) {
                    
                    if (state.order[drinkToInsertFound].count >= 1) {
                        
                        let currentStateName = state.order[drinkToInsertFound].name;
                        let currentStateCount = state.order[drinkToInsertFound].count;
                        let newStateCount; 
                        let extraDrinksFlag = false; 
                        let newDrinksCount; 
                        
                        if (state.order[drinkToInsertFound].count >= action.order.count) {
                        
                            state.order[drinkToInsertFound].count -= action.order.count;
                        } else if (state.order[drinkToInsertFound].count < action.order.count) {
                            
                            newStateCount = currentStateCount; 
                            state.order.splice(drinkToInsertFound, 1);
                            extraDrinksFlag = true; 
                            newDrinksCount = action.order.count - currentStateCount;
                        }

                        if (currentStateCount === action.order.count) {
                            
                            state.order.splice(drinkToInsertFound, 1);
                        }
                
                        // create new object. 
                        let newItem = {
                            name: currentStateName,
                            drinkAlert: action.order.name,
                            count: newStateCount || action.order.count,
                            hasCombo: false
                        };

                        let extraDrinks = {
                            name: action.order.name,
                            foodType: 'drink',
                            count: newDrinksCount 
                        };
                        
                        if (extraDrinksFlag) {
                            alert('6666')
                            return {
                                ...state,
                                order:  [
                                    ...state.order,
                                    newItem,
                                    extraDrinks
                                ]
                            }; 
                        } else {
                            alert('777777')
                            return {
                                ...state,
                                order:  [
                                    ...state.order,
                                    newItem
                                ]
                            }; 
                        } 
                    } else {
                        state.order[drinkToInsertFound].hasCombo = false; 
                        state.order[drinkToInsertFound].drinkAlert = action.order.name;
                        alert('88888')
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

