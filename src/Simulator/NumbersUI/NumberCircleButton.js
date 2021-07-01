import '../../css/NumberCircleButton.css';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../Redux/actionCreators';

// Handles displaying the number as a button. 
function NumberCircleButton({ number }) {
    
    const dispatch = useDispatch();

    // If the number button was clicked, update the quantity state in redux. 
    function handleClick(number) {
        dispatch(setQuantity(number));
    }

    return (
        <div className="NumberCircleButton" onClick={() => handleClick(number)}>
            <p className="Number-Circle-Text">{ number }</p>
        </div>
    )
}

export default NumberCircleButton;