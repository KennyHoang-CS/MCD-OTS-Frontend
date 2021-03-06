import { combineReducers } from 'redux';
import breakfastReducer from './breakfastReducer';
import breakfast2Reducer from './breakfast2Reducer';
import lunchReducer from './lunchReducer';
import lunch2Reducer from './lunch2Reducer';
import drinksReducer from './drinksReducer';
import specialDrinksReducer from './specialDrinksReducer';
import saladReducer from './saladReducer';
import dessertReducer from './dessertReducer';
import dessert2Reducer from './dessert2Reducer';
import mcvalueReducer from './mcvalueReducer';
import happyMealReducer from './happyMealReducer';
import mccafeReducer from './mccafeReducer';
import lsmReducer from './lsmReducer';
import condimentsReducer from './condimentsReducer';
import currentOrderReducer from './currentOrderReducer';
import sizeReducer from './sizeReducer';
import quantityReducer from './quantityReducer';
import currentItemReducer from './currentItemReducer';
import customersReducer from './customersReducer';
import gameReducer from './gameReducer';
import leaderboardReducer from './leaderboardReducer';
import alertMessageReducer from './alertMessageReducer';

const rootReducer = combineReducers({ 
    breakfast: breakfastReducer, 
    breakfast2: breakfast2Reducer,
    lunch: lunchReducer,
    lunch2: lunch2Reducer,
    drinks: drinksReducer,
    mcvalue: mcvalueReducer,
    specialDrinks: specialDrinksReducer,
    mcCafe: mccafeReducer,
    salad: saladReducer,
    dessert: dessertReducer,
    dessert2: dessert2Reducer,
    happyMeal: happyMealReducer,
    lsm: lsmReducer,
    condiments: condimentsReducer,
    currentOrder: currentOrderReducer,
    size: sizeReducer,
    quantity: quantityReducer,
    currentItem: currentItemReducer,
    customers: customersReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
    message: alertMessageReducer
});

export default rootReducer; 