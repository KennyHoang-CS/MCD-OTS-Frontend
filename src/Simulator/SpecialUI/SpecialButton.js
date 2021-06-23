import '../../css/SpecialUI.css';

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