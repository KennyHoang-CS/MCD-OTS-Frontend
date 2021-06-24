import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

export function fetchMenuFromAPI(actionType, menu) {
    return async function(dispatch) {
        try {
            let res = await axios.get(`${BASE_URL}/${menu}`);
            dispatch(getMenu(actionType, res.data.items));
        } 
        
        catch (err) {

        }
    };
}

export function getCurrentOrder() {
    return {
        type: 'GET_CURRENT_ORDER_MENU'
    };
};

export function addToCurrentOrder(newItem) {
    return {
        type: 'ADD_TO_CURRENT_ORDER',
        order: newItem
    };
};

export function setSize(name) {
    return {
        type: 'SET_SIZE',
        name
    };
}

export function getSize() {
    return {
        type: 'GET_SIZE'
    };
}

export function setQuantity(quantity) {
    
    return {
        type: 'SET_QUANTITY',
        quantity
    };
}

export function getQuantity() {
    return {
        type: 'SET_QUANTITY'
    };
}

export function toggleItem(name) {
    return {
        type: 'TOGGLE_ITEM',
        name
    };
}

export function setCurrentItemDefault() {
    return {
        type: 'SET_DEFAULT_VALUES'
    };
}

export function removeItem(name) {
    return {
        type: 'REMOVE_ITEM_FROM_CURRENT_ORDER',
        name 
    }
}

export function removeDrinkFromMeal(name) {
    return {
        type: 'REMOVE_DRINK_FROM_ITEM',
        name
    }
}

function getMenu(actionType, menu) {
    return {
        type: actionType,
        menu
    };
};