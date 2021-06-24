import { createItem } from '../reduxHelpers';


const INITIAL_STATE = {
    order: [],
    distinctDrinks: new Set()
}; 

function currentOrderReducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case 'GET_CURRENT_ORDER_MENU':
            return {
                ...state, order: action.order
            }

        case 'REMOVE_ITEM_FROM_CURRENT_ORDER': 
            let itemTodelete = action.name; 
            return {
                ...state,
                order: state.order.filter(item => item.name !== itemTodelete)
            }

        case 'REMOVE_DRINK_FROM_ITEM':
           
            let itemLocation = state.order.findIndex(item => item.name === action.name) 
            let drinkMsg = 'Select Medium / Large Drink';
        
            if (state.order[itemLocation].foodType === 'drink' || state.order[itemLocation].drinkAlert === '') {
                return {
                    ...state,
                    order: [
                        ...state.order
                    ]
                }
            }
            
            
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
                console.log('aaa')
                // locate the existing stand-alone drink to insert into combo. 
                let soloDrinkFound = state.order.findIndex( 
                    i => i.foodType === 'drink'
                );

                // existing stand-alone drink was found if it isn't -1. 
                
                if (soloDrinkFound !== -1) {
                    console.log('bbb')

                    /*
                    let flag = true;
                    let countUpcomingMeals = action.order.count; 
                    
                    let tempArr = []; 
                    while(flag) {

                        if (countUpcomingMeals !== 0) {
                            tempArr.push(
                                createItem(
                                    action.order.name,
                                    state.order[soloDrinkFound].name,
                                    1,
                                    true
                                )
                            )
                            state.order.splice(soloDrinkFound, 1);
                            --countUpcomingMeals;
                        }
                        
                        soloDrinkFound = state.order.findIndex( 
                            i => i.foodType === 'drink'
                        );

                        if (soloDrinkFound === -1) flag = false;
                    }
                    
                    return {
                        ...state,
                        order: [
                            ...state.order,
                            ...tempArr
                        ]
                    }
                    */



                    // 2 drinks of the same vs 3 upcoming combo meals. 
                    if (state.order[soloDrinkFound].count < action.order.count) {
                        console.log('ccc')
                        let newCount = action.order.count - state.order[soloDrinkFound].count;

                        let newItem = createItem(
                            action.order.name, 
                            state.order[soloDrinkFound].name,
                            state.order[soloDrinkFound].count,
                            false
                        );

                        let extraItem = createItem(
                            action.order.name,
                            action.order.drinkAlert,
                            newCount,
                            true
                        );
                        
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
                    
                    /*
                    if (soloDrinkFound !== -1) {
                        let flag = true;
                        while(flag) {

                        }
                    }
                    */

                    // mark it false, since that order combo will have a drink. 
                    action.order.hasCombo = false;

                    // get the name of the drink that was found. 
                    let drink = state.order[soloDrinkFound].name;
                    
                    // if the drink has a count of 1, remove it. 
                    if (state.order[soloDrinkFound].count === 1) {
                        state.order.splice(soloDrinkFound, 1);
                    } else {    
                        console.log('dddd')
                        // solo drinks > upcoming combo meals: 3 cokes vs 2 meals
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

                let comboWithSameDrinkFound = 
                    state
                    .order
                    .findIndex( 
                        i => i.drinkAlert === action.order.name
                    );
                
                // There exists an item combo that needs a drink. 
                if (drinkToInsertFound !== -1) {
                    console.log('11111')
                    
                    // there exists different item combos that needs a drink 


                    // If there exists an item combo with the same drink.  
                    if (comboWithSameDrinkFound !== -1) {
                        
                        if (state.order[comboWithSameDrinkFound].drinkAlert === action.order.name) {
                            
                            // Increment the existing item combo. 
                            state.order[comboWithSameDrinkFound].count += 1;
                            // Decrement the combo that needs a drink to be inserted. 
                            state.order[drinkToInsertFound].count -= 1;

                            // Remove the combo when it doesn't need anymore drinks. 
                            if (state.order[drinkToInsertFound].count === 0) {
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

                    // There exists multiple item combos of the same that needs a drink. 
                    if (state.order[drinkToInsertFound].count >= 1) {
                        console.log('22222')
                        let currentStateName = state.order[drinkToInsertFound].name;
                        let currentStateCount = state.order[drinkToInsertFound].count;
                        let newStateCount; 
                        let extraDrinksFlag = false; 
                        let newDrinksCount; 
                        
    


                        if (state.order[drinkToInsertFound].count >= action.order.count) {
                            console.log('3333333')
                            state.order[drinkToInsertFound].count -= action.order.count;
                        } else if (state.order[drinkToInsertFound].count < action.order.count) {
                            console.log('44444')
                            newStateCount = currentStateCount; 
                            state.order.splice(drinkToInsertFound, 1);
                            extraDrinksFlag = true; 
                            newDrinksCount = action.order.count - currentStateCount;
                        }

                        // If there is only one combo 'A' that requires a drink, then the combo along with the inserted drink
                        // will be a new item 'B', so delete 'A'. 
                        if (currentStateCount === action.order.count) {
                            console.log('55555555')
                            state.order.splice(drinkToInsertFound, 1);
                        }
                        
                        // create new item. 
                        let newItem = {
                            name: currentStateName,
                            drinkAlert: action.order.name,
                            count: newStateCount || action.order.count,
                            hasCombo: false
                        };

                        // create the new item that contains the extra drinks. 
                        let extraDrinks = {
                            name: action.order.name,
                            foodType: 'drink',
                            count: newDrinksCount 
                        };
                        
                        if (extraDrinksFlag) {

                            console.log('66666666')

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
                            console.log('777777')
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
                        console.log('8888888')
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

            // No duplicate items to take care of, don't need to insert a stand-alone drink into
            // a combo, don't need to insert a drink into a combo. Must be a new item that 
            // does not exist in order. 
            if (action.order.foodType === 'drink') {
                state.distinctDrinks.add(action.order.name); 
                //alert(state.distinctDrinks.size)
                //alert('DRINKS LOL');
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

