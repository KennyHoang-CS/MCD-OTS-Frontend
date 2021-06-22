import '../../css/NumberCircleButton.css';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../Redux/actionCreators';

function NumberCircleButton({ number }) {
    
    const dispatch = useDispatch();

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