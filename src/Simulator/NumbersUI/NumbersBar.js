import NumberCircleButton from './NumberCircleButton';

function NumbersBar() {

    let leftNumbers = ['0', '1', '2', '3', '4'];
    let rightNumbers = ['5', '6', '7', '8', '9'];
    
    return (
        <div className="NumbersBar">
            <div className="Left-Numbers">
                {leftNumbers.map(n => <NumberCircleButton number={n} />)}
            </div>
            <div className="Right-Numbers">
                {rightNumbers.map(n => <NumberCircleButton number={n} />)}
            </div>
        </div>
    )
}

export default NumbersBar;