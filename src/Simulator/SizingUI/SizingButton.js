import '../../css/SizingBar.css';
import { useDispatch } from 'react-redux';
import { setSize } from '../../Redux/actionCreators';

// Handles displaying the size as a button. 
function SizingButton({ abbreviation, name }) {
    
    const dispatch = useDispatch();
    
    // If the size button was clicked, update the size state in redux. 
    function handleClick(abbreviation) {
        dispatch(setSize(abbreviation));
    }
    
    // Render the size button.
    return (
        <div className="Sizing-Button" onClick={() => handleClick(abbreviation)}>
            <div className="Sizing-Button-Content">
                <div className="abbreviation">
                    { abbreviation }
                    <p className="sizing-name">
                        { name }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SizingButton; 