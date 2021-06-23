import SpecialButton from "./SpecialButton";
import '../../css/SpecialUI.css';
import { useSelector, shallowEqual } from 'react-redux';

function SpecialBar() {
    
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);
    
    return (
        <div className="Special-Bar">
            <div className="Special-Left-Buttons">
                <SpecialButton name="Quantity" display={quantityState}/>
                <SpecialButton name="Sizing" display={sizeState}/>
            </div>
            <div className="Special-Right-Buttons">
        
            </div>
        </div>
    )
}

export default SpecialBar; 