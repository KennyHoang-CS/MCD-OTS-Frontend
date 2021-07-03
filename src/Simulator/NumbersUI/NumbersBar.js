import NumberCircleButton from './NumberCircleButton';
import { v4 as uuidv4 } from 'uuid'

// Handles displaying the whole numbers bar from 0-9.
function NumbersBar() {

    let leftNumbers = ['0', '1', '2', '3', '4'];
    let rightNumbers = ['5', '6', '7', '8', '9'];
    
    // Break the numbers bar in half, so it will fit nicely in small screens. 
    return (
        <div className="NumbersBar">
            <div className="Left-Numbers">
                {leftNumbers.map(n => <NumberCircleButton key={uuidv4()} number={n} />)}
            </div>
            <div className="Right-Numbers">
                {rightNumbers.map(n => <NumberCircleButton key={uuidv4()} number={n} />)}
            </div>
        </div>
    )
}

export default NumbersBar;