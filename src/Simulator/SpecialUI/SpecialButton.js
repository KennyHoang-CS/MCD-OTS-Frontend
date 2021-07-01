import '../../css/SpecialUI.css';

// Handles displaying the special button that have the current state of 
// quantity and sizing. 
function SpecialButton({ name, display }) {
    return (
        <div className="SpecialButton">
            <div className="SpecialButton-Content">
                <h3>{ name }</h3>
                <p>{ display }</p>
            </div>
        </div>
    )
}

export default SpecialButton;