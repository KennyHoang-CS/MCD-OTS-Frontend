import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

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

export function updateLeaderboard(newUser, time, formattedTime) {
    
    let myData = {
        username: newUser,
        time,
        formattedTime
    };
    
    return async function(dispatch) {
        try {
            await axios.post(`${BASE_URL}/leaderboard/new`, {data: myData});
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

export function setMessage(message) {
    return {
        type: 'SET_MESSAGE',
        message
    }
};

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

export function toggleItem(id) {
    return {
        type: 'TOGGLE_ITEM',
        id
    };
}

export function setCurrentItemDefault() {
    return {
        type: 'SET_DEFAULT_VALUES'
    };
}

export function removeItem(id) {
    return {
        type: 'REMOVE_ITEM_FROM_CURRENT_ORDER',
        id
    }
}

export function removeDrinkFromMeal(id) {
    return {
        type: 'REMOVE_DRINK_FROM_ITEM',
        id
    }
}

export function nextCustomer() {
    return {
        type: 'NEXT_CUSTOMER'
    }
}

export function toggleGameStatus(flag) {
    return {
        type: 'TOGGLE_GAME_STATUS',
        flag
    }
}

export function setGamePlayed(flag) {
    return {
        type: 'SET_GAME_PLAYED',
        flag
    }
}

export function loadAnswers() {
    return {
        type: 'LOAD_ANSWERS'
    }
}

export function getCustomerAnswer(id) {
    return {
        type: 'GET_CUSTOMER_ANSWER',
        id
    }
}

export function resetCurrentOrder() {
    return {
        type: 'CLEAR_CURRENT_ORDER'
    }
}

export function resetGame() {
    return {
        type: 'RESET_GAME'
    }
}

export function setTimeRedux(time) {
    return {
        type: 'SET_TIME',
        time
    }
}

export function setFormattedTime(time) {
    return {
        type: 'SET_FORMATTED_TIME',
        time
    }
}

function getMenu(actionType, menu) {
    return {
        type: actionType,
        menu
    };
};