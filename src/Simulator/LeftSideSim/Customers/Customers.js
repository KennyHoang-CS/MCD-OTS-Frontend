import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI, nextCustomer, toggleGameStatus, getCustomerAnswer, resetCurrentOrder, incrementCorrectOrder, incrementWrongOrder } from '../../../Redux/actionCreators';
import { uuid } from 'uuidv4';
import Customer from "./Customer";
import { validateOrder } from './Scores';
import Timer from './Timer';
import { useHistory } from 'react-router-dom';

export default function Customers() {
    
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.menu, shallowEqual);
    let customerAnswer = useSelector(state => state.customers.customerAnswer, shallowEqual);
    let inputOrder = useSelector(state => state.currentOrder.order, shallowEqual);

    let customerIdx = useSelector(state => state.game.customerIdx, shallowEqual);
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);
    let correctOrders = useSelector(st => st.game.correctOrders, shallowEqual);
    let wrongOrders = useSelector(st => st.game.wrongOrders, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_CUSTOMERS', 'customers'));
        dispatch(fetchMenuFromAPI('LOAD_ANSWERS', 'customers/answers'));
    }, [dispatch]);
        
    function startGame() {
        dispatch(toggleGameStatus(true));
        dispatch(nextCustomer());
    }

    function submitOrder(inputOrder) {
        dispatch(getCustomerAnswer(customers[customerIdx].id)); 
        let orderPassed = validateOrder(inputOrder, customers[customerIdx].id);
    
        if (orderPassed) {
            //alert("ORDER PASSED");
            dispatch(incrementCorrectOrder());
            //console.log(`Correct Orders #: ${correctOrders}`);

        } else if (!orderPassed) {
            //alert("ORDER FAILED");
            dispatch(incrementWrongOrder());
            //console.log(`Wrong Orders #: ${wrongOrders}`);

        }
        dispatch(nextCustomer());
        dispatch(resetCurrentOrder());
    }

    //console.log('customerIdx: ', customerIdx)

    if (customerIdx === 2) {
        dispatch(toggleGameStatus(false));
        alert('GAME OVER');
    }
    //console.log('GameStatus: ', gameStatus)

    //customerIdx = 0;
    //console.log('answer: ', answers);

    return ( 
        <div>
            <button onClick={startGame}>Start Game</button>
            {gameStatus && <button onClick={() => submitOrder(inputOrder, customerAnswer)}>Submit Order</button>}
            {gameStatus && <Customer id={ customerIdx } image={ customers[customerIdx].customerimage } order={customers[customerIdx].fakeorder } />}
        </div>
    )
}

