import '../../css/NumberCircleButton.css';

function NumberCircleButton({ number }) {
    
    function handleClick(number) {
        alert(number);
    }

    return (
        <div className="NumberCircleButton" onClick={() => handleClick(number)}>
            <p className="Number-Circle-Text">{ number }</p>
        </div>
    )
}

export default NumberCircleButton;