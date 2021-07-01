import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setTimeRedux } from '../../../Redux/actionCreators';

// Handles displaying the time in real-time. 
export default function Timer() {

    const [time, setTime] = useState(0);
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);
    const dispatch = useDispatch();

    // Save the time in redux. 
    if (gameStatus) {
        dispatch(setTimeRedux(time));
    }

    // Increment the timer using setInterval().  
    useEffect(() => {
        let interval = null; 

        if (gameStatus) {  // when timer is on.
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10)
        } else {    // when timer is off. 
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [gameStatus])

    return (
        // Display the timer in 'minutes:seconds:miliseconds'.
        <div>
            <div className="Timer">
                <span>{("0" + Math.floor(((time / 60000) % 60))).slice(-2)}:</span>
                <span>{("0" + Math.floor(((time / 1000) % 60))).slice(-2)}:</span>
                <span>{("0" + Math.floor(((time / 10) % 100))).slice(-2)}</span>
            </div>
        </div>
    )
}