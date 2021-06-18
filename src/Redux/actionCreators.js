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

function getMenu(actionType, menu) {
    return {
        type: actionType,
        menu
    };
};