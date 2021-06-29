import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI, nextCustomer, 
    toggleGameStatus, getCustomerAnswer, 
    resetCurrentOrder, resetGame, 
    setTimeRedux, setGamePlayed, 
    updateLeaderboard, setFormattedTime } from '../../../Redux/actionCreators';
import { uuid } from 'uuidv4';
import Customer from "./Customer";
import { validateOrder } from './Scores';
import '../../../css/CustomerUI.css';

export default function Customers() {
    
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.menu, shallowEqual);
    let customerAnswer = useSelector(state => state.customers.customerAnswer, shallowEqual);
    let inputOrder = useSelector(state => state.currentOrder.order, shallowEqual);

    let customerIdx = useSelector(state => state.game.customerIdx, shallowEqual);
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);
    let gamePlayed = useSelector(state => state.game.gamePlayed, shallowEqual);
    let getTime = useSelector(state => state.game.time, shallowEqual);
    let getFormattedTime = useSelector(state => state.game.formattedTime, shallowEqual);

    let INITIAL_STATE = {
        username: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_CUSTOMERS', 'customers'));
        dispatch(fetchMenuFromAPI('LOAD_ANSWERS', 'customers/answers'));
    }, [dispatch]);
        
    function startGame() {
        dispatch(setGamePlayed(false));
        dispatch(toggleGameStatus(true));
        dispatch(nextCustomer());
    }

    function submitOrder(inputOrder) {
        dispatch(getCustomerAnswer(customers[customerIdx].id)); 
        let orderPassed = validateOrder(inputOrder, customers[customerIdx].id);
    
        if (orderPassed) {
           // alert("ORDER PASSED");
          
            //dispatch(incrementCorrectOrder());
            //console.log(`Correct Orders #: ${correctOrders}`);

        } else if (!orderPassed) {
           // alert("ORDER FAILED");
            //dispatch(incrementWrongOrder());
            //console.log(`Wrong Orders #: ${wrongOrders}`);

        }
        dispatch(nextCustomer());
        dispatch(resetCurrentOrder());
    }

    if (customerIdx === 1) {
        dispatch(setFormattedTime(formatTime()));
        dispatch(toggleGameStatus(false));
        dispatch(setGamePlayed(true));
        dispatch(resetGame());
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.username === '') {
            dispatch(setGamePlayed(false));
            return;
        }
        
        setFormData(INITIAL_STATE);
        dispatch(updateLeaderboard(formData.username, getTime, getFormattedTime));  
        dispatch(setGamePlayed(false));  
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function formatTime() {
        let minutes = ("0" + Math.floor(((getTime / 60000) % 60))).slice(-2).toString();
        let seconds = ("0" + Math.floor(((getTime / 1000) % 60))).slice(-2).toString();
        let formattedTime = minutes + ":" + seconds; 
        
        return formattedTime;
    }
    
    return ( 
        <div>
            {gamePlayed && 
                <div className="User-Form">                    
                    <h3>Time Achieved: {formatTime()}</h3>
                    <form className="Form-Wrapper"  onSubmit={handleSubmit}>
                        <label htmlFor="username">Username: </label>
                        <input 
                            id="username"
                            name="username"
                            value={formData.username}
                            type="text"
                            placeholder="Enter into leaderboard."
                            onChange={handleChange}
                        />
                        <button className="Form-Submit-Btn">Submit</button>
                    </form>
               </div>
            }
            {!gameStatus && <button className="Customer-Start-Btn" onClick={startGame}>Start Game</button>}
            {gameStatus && <Customer id={ customerIdx } image={ customers[customerIdx].customerimage } order={customers[customerIdx].fakeorder } />}
            {gameStatus && <button className="Submit-Order-Btn" onClick={() => submitOrder(inputOrder, customerAnswer)}>Submit Order</button>}
        </div>
    )
}

