import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI, nextCustomer, 
    toggleGameStatus, 
    resetCurrentOrder, resetGame, 
    setGamePlayed, setMessage,
    updateLeaderboard, setFormattedTime } from '../../../Redux/actionCreators';
import Customer from "./Customer";
import { validateOrder } from './customerHelpers';
import '../../../css/CustomerUI.css';

// Handles the game of displaying customers. 
export default function Customers() {
    
    const dispatch = useDispatch();
    
    // customers and their answers, and the user input. 
    const customers = useSelector(state => state.customers.menu, shallowEqual);
    let inputOrder = useSelector(state => state.currentOrder.order, shallowEqual);

    //  the current customer id, game status, game played, the time, and formatted time. 
    let customerIdx = useSelector(state => state.game.customerIdx, shallowEqual) || 0;
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);
    let gamePlayed = useSelector(state => state.game.gamePlayed, shallowEqual);
    let getTime = useSelector(state => state.game.time, shallowEqual);

    // the form to handle entering username into leaderboard. 
    let INITIAL_STATE = {
        username: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    // use 'react-redux' to load in customers and their answers from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_CUSTOMERS', 'customers'));
    }, [dispatch]);
        
    // handles starting the game. 
    function startGame() {
        dispatch(setMessage(''));
        dispatch(resetCurrentOrder()); // clear any inputs before game starts.
        dispatch(setGamePlayed(false));
        dispatch(toggleGameStatus(true));
        dispatch(nextCustomer());
    }

    // handles submitting the user input order for the current customer. 
    function submitOrder(inputOrder) {
        
        // validate if the user input matches the current customer answer. 
        let orderPassed = validateOrder(inputOrder, customers[customerIdx].id);
        
        // if user input passes, load in next customer. 
        if (orderPassed) {
            //dispatch(setMessage(`Customer #${++customerIdx} passed.`))
           // dispatch(nextCustomer());   // get the next customer. 
           // dispatch(resetCurrentOrder()); // clear the user input for next customer. 
        } else if (!orderPassed) {  
           // dispatch(setMessage(`Customer #${++customerIdx} failed.`))
        } 
        dispatch(nextCustomer());   // get the next customer. 
            dispatch(resetCurrentOrder()); // clear the user input for n
    }

    // After the last customer, the game is over. 
    if (customerIdx === 19) {
        dispatch(setFormattedTime(formatTime()));   // format the time 'minutes:seconds'.
        dispatch(toggleGameStatus(false));  // flag to know the game is off. 
        dispatch(setGamePlayed(true));  // flag to know if user has played the game.
        dispatch(resetGame());  // reset the game, clear the user input and set the customers to start at beginning.
    }

    // Handles the post-game.
    function handleSubmit(e) {
        e.preventDefault();
        
        // Return if username is empty. 
        if (formData.username === '') {
            dispatch(setGamePlayed(false));
            return;
        }
        
        // Update the leaderboard with username, raw time (used for sorting), and formatted time. 
        dispatch(updateLeaderboard(formData.username, getTime, formatTime(getTime))); 

        // Reset leaderboard username form to default.
        setFormData(INITIAL_STATE);
        
        // Reset gamePlayed back to false, so it can be used to determine if user has played the game or not. 
        dispatch(setGamePlayed(false));  
    }

    // Handles username form changes, so state can be updated to determine username. 
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // Handles formatting the time and returns 'minutes:seconds'. 
    function formatTime() {
        let minutes = ("0" + Math.floor(((getTime / 60000) % 60))).slice(-2).toString();
        let seconds = ("0" + Math.floor(((getTime / 1000) % 60))).slice(-2).toString();
        let formattedTime = minutes + ":" + seconds; 
        
        return formattedTime;
    }

    return ( 
        // Displays post-game message, rendering customers and the game. 
        <div>
            {gamePlayed && 
                <div className="User-Form">                    
                    <h3 className="Timer-Achieved">Time Achieved: {formatTime()}</h3>
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
            {gameStatus && <Customer id={ customerIdx } image={ customers[customerIdx].customerimage } order={customers[customerIdx].fakeorder} />}
            {gameStatus && <button className="Submit-Order-Btn" onClick={() => submitOrder(inputOrder)}>Submit Order</button>}
        </div>
    )
}

