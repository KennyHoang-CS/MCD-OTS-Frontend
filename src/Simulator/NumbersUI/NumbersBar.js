import NumberCircleButton from './NumberCircleButton';

function NumbersBar() {

    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    
    return (
        <div className="NumbersBar">
            {numbers.map(n => <NumberCircleButton number={n} />)}
        </div>
    )
}

export default NumbersBar;