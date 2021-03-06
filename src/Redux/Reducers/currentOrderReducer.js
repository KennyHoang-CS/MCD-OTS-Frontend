import { createItem, hashBrownORFries } from '../reduxHelpers';
import { uuid } from 'uuidv4';  

const INITIAL_STATE = {
    order: [],                  // holds the current items in pending orders screen. 
    distinctDrinks: new Set(),   // used to count the distinct number of solo drinks.
    lastComboItem: ''
}; 

//  BUGS: 
/*
   1 medium Egg McMuffin Combo w/ M Coke 
   If you add a different medium combo with a M Coke, it would just 
   increment the egg mcmuffin combo w/ M Coke.

*/

function currentOrderReducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case 'GET_CURRENT_ORDER_MENU':
            
            return {
                ...state, order: action.order
            }

        case 'CLEAR_CURRENT_ORDER':
            
            return {
                ...state,
                order: [],
                distinctDrinks: new Set()
            }

        case 'REMOVE_ITEM_FROM_CURRENT_ORDER': 
        
            let itemTodelete = action.id; 
            
            return {
                ...state,
                order: state.order.filter(item => item.id !== itemTodelete)
            }

        case 'REMOVE_DRINK_FROM_ITEM':

            let itemLocation = state.order.findIndex(item => item.id === action.id) 
            let drinkMsg = 'Select Medium / Large Drink';
            
            // If the item is not a combo, then return without doing anything. 
            if (state.order[itemLocation].foodType === 'drink' || state.order[itemLocation].drinkAlert === '') {
                return {
                    ...state,
                    order: [
                        ...state.order
                    ]
                }
            }
            
            // If the item is a combo, remove the drink and insert the default drink message. 
            state.order[itemLocation].drinkAlert = drinkMsg;
            state.order[itemLocation].hasCombo = true;

            return {
                ...state,
                order: [
                    ...state.order
                ]
            }

        case 'ADD_TO_CURRENT_ORDER':

            // add an existing stand-alone drink to a combo. 
            if (action.order.hasCombo === true) {
                
                // locate the existing stand-alone drink to insert into combo. 
                let soloDrinkFound = state.order.findIndex( 
                    i => i.foodType === 'drink'
                );

                // existing stand-alone drink was found if it isn't -1. 
                if (soloDrinkFound !== -1) {
                
                // CASE: 2 drinks of the same vs 3 upcoming combo meals.
                // i.e. 2 cokes vs 3 meals. 
                if (state.order[soloDrinkFound].count < action.order.count) {
                    
                    let newCount = action.order.count - state.order[soloDrinkFound].count;
                    let foodType = action.order.type; 
                    let comboSize = action.order.comboSize;

                    // create combo items with their drink inserted. 
                    let newItem = createItem(
                            action.order.name, 
                            state.order[soloDrinkFound].name,
                            state.order[soloDrinkFound].count,
                            false,
                            uuid(),
                            hashBrownORFries(foodType, comboSize) || foodType,
                            comboSize
                        );

                    // create combo items that still needs a drink to be inserted. 
                    let extraItem = createItem(
                            action.order.name,
                            action.order.drinkAlert,
                            newCount,
                            true,
                            uuid(),
                            hashBrownORFries(foodType, comboSize) || foodType,
                            comboSize
                        );
                        
                    // remove drink from state, since # quantity was used up. 
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
                    // CASE: solo drinks > upcoming combo meals: 3 cokes vs 2 meals
                    
                    if (state.order[soloDrinkFound].count >= action.order.count) {
                        state.order[soloDrinkFound].count -= action.order.count;
                        if (state.order[soloDrinkFound].count === 0) {
                            state.order.splice(soloDrinkFound, 1);
                        }
                    } else { // decrement drink count if upcoming meal is 1. 
                        state.order[soloDrinkFound].count -= 1; 
                    }
                }
    
                return {
                    ...state,
                    order:  [
                        ...state.order, 
                        action.order,
                        action.order.drinkAlert = drink,
                        ]
                    }
                }
            } // END IF: 'add an existing stand-alone drink to a combo'. 
            

            // Check if an existing item combo needs a drink to be inserted. 
            if (action.order.foodType === 'drink') {
                
                // Find the combo item location for the drink to be inserted. 
                let drinkToInsertFound = 
                    state
                    .order
                    .findIndex( 
                        i => i.hasCombo === true
                    );

                // check if an existing combo exist, so we can just increment instead. 
                let comboWithSameDrinkFound = 
                    state
                    .order
                    .findIndex( 
                        i => i.drinkAlert === action.order.name
                    );
                
                // There exists an item combo that needs a drink. 
                if (drinkToInsertFound !== -1) {
                    
                    // If there exists an item combo with the same drink.  
                    
                    if ((comboWithSameDrinkFound !== -1)) {
                        if ((state.order[comboWithSameDrinkFound].drinkAlert === action.order.name) 
                            && (state.order[comboWithSameDrinkFound].name === state.lastComboItem)) {
                            
                            
                            // 10 meals vs 11 drinks
                            let extraDrinksCount = action.order.count - state.order[comboWithSameDrinkFound].count; 
                            let actualDrinksCount = action.order.count - extraDrinksCount; 

                            // Increment the existing item combo. 
                            state.order[comboWithSameDrinkFound].count += actualDrinksCount;
                            // Decrement the combo that needs a drink to be inserted. 
                            state.order[drinkToInsertFound].count -= actualDrinksCount;

                            // Remove the combo when it doesn't need anymore drinks. 
                            if (state.order[drinkToInsertFound].count <= 0) {
                                state.order.splice(drinkToInsertFound, 1);
                            }

                            return {
                                ...state,
                                order: [
                                    ...state.order
                                ]
                            }
                        }
                    }
                    

                    // There exists multiple item combos of the same found that needs a drink. 
                    if (state.order[drinkToInsertFound].count >= 1) {
                        
                        // Get name of the current combo name from state. 
                        let currentStateName = state.order[drinkToInsertFound].name;
                        
                        // Get the count of the current combo from state.
                        let currentStateCount = state.order[drinkToInsertFound].count;
                        
                        // Get the food type ... 
                        let foodType = state.order[drinkToInsertFound].type; 
                        
                        // Get the combo size ... 
                        let comboSize = state.order[drinkToInsertFound].comboSize;
                        
                        let newStateCount; 
                        let extraDrinksFlag = false; 
                        let newDrinksCount; 
                        
                        // If we have more combo counts (state) than upcoming drinks. 
                        // Adjust the state combo count, so no more drinks will be inserted in there. 
                        if (state.order[drinkToInsertFound].count >= action.order.count) {
                            state.order[drinkToInsertFound].count -= action.order.count;
                        } else if (state.order[drinkToInsertFound].count < action.order.count) {
                            
                            // If # of combos (state) is less than # of drinks (action),
                            // then remove the combos from state. 
                            newStateCount = currentStateCount; 
                            state.order.splice(drinkToInsertFound, 1);
                            
                            // Indicate that we have extra drinks.  
                            extraDrinksFlag = true; 
                            newDrinksCount = action.order.count - currentStateCount;
                        }

                        // If there is only one combo 'A' that requires a drink, then the combo along with the inserted drink
                        // will be a new item 'B', so delete 'A'. 
                        if (currentStateCount === action.order.count) {
                            state.order.splice(drinkToInsertFound, 1);
                        }
                        
                        // create new item. 
                        let newItem = {
                            name: currentStateName,
                            drinkAlert: action.order.name,
                            count: newStateCount || action.order.count,
                            hasCombo: false,
                            id: uuid(),
                            type: hashBrownORFries(foodType, comboSize) || foodType,
                            comboSize
                        };

                        // create the new item that contains the extra drinks. 
                        let extraDrinks = {
                            name: action.order.name,
                            foodType: 'drink',
                            count: newDrinksCount 
                        };
                        
                        if (extraDrinksFlag) {

                            // Find the combo item location for the drink to be inserted. 
                            let drinkToInsertFound = 
                                state
                                .order
                                .findIndex( 
                                i => i.hasCombo === true
                                );
                            
                            // Is there another combo that needs a drink to insert that extra drink in? 
                            let flag = true; 

                            // For every extra drink, keep inserting it into combos that needs a drink. 
                            while (flag) {
                                
                                if (drinkToInsertFound !== -1) {
                                    state.order[drinkToInsertFound].drinkAlert = extraDrinks.name;
                                    extraDrinks.count -= 1;
                                    state.order[drinkToInsertFound].hasCombo = false; 
                                }

                                drinkToInsertFound = state.order.findIndex( 
                                                        i => i.hasCombo === true
                                                    );
                                if (drinkToInsertFound === -1) flag = false; 
                            }
                            
                            // If there is no more extra drinks remaining, don't return with any extra drinks as an item.  
                            if (extraDrinks.count === 0) {
                                
                                return {
                                    ...state,
                                    order:  [
                                        ...state.order,
                                        newItem,
                                    ]
                                }; 
                            }
                            
                            // If there is extra drinks, and no combos that needs a drink to be inserted. 
                            // Add the extra drinks as an item. 
                            return {
                                ...state,
                                order:  [
                                    ...state.order,
                                    newItem,
                                    extraDrinks
                                ]
                            }; 
                        } else {
                            
                           // state.lastComboItem = action
                            return {
                                ...state,
                                order:  [
                                    ...state.order,
                                    newItem
                                ]
                            }; 
                        } 
                    } else {
                        // set it to false, so we won't insert anymore drinks into there.
                        state.order[drinkToInsertFound].hasCombo = false; 
                        // set that combo drink to the drink's name that we inserted. 
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
            let found = state.order.findIndex(i => ((i.name === action.order.name) && (i.drinkAlert === action.order.drinkAlert)));
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

            // No duplicate items to take care of, don't need to insert a stand-alone drink into
            // a combo, don't need to insert a drink into a combo. Must be a new item that 
            // does not exist in order. 
            if (action.order.foodType === 'drink') {
                state.distinctDrinks.add(action.order.name); 
            }
            if (action.order.hasCombo) {
                state.lastComboItem = action.order.name;
            }
            return {
                ...state,
                order: [
                    ...state.order, 
                    action.order
                ]
            }
        default: 
            return state; 
    }
}

export default currentOrderReducer;

