import SpecialButton from "./SpecialButton";
import '../../css/SpecialUI.css';

function SpecialBar() {
    return (
        <div className="Special-Bar">
            <div className="Special-Left-Buttons">
                <SpecialButton name="Recall By Number"/>
                <SpecialButton name="Recall By Preview"/>
            </div>
            <div className="Special-Right-Buttons">
                <SpecialButton name="Get Mobile Order"/>
                <SpecialButton name="Grill"/>
                <SpecialButton name="Manager"/>
            </div>
        </div>
    )
}

export default SpecialBar; 