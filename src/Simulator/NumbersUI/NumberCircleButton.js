import { Redirect } from 'react-router';
import '../../css/NumberCircleButton.css';

function NumberCircleButton({ number }) {
    return (
        <div className="NumberCircleButton">
            <p className="Number-Circle-Text">{ number }</p>
        </div>
    )
}

export default NumberCircleButton;