import '../../css/SizingBar.css';
import { useDispatch } from 'react-redux';
import { setSize } from '../../Redux/actionCreators';

function SizingButton({ abbreviation, name }) {
    
    const dispatch = useDispatch();
    
    function handleClick(abbreviation) {
        dispatch(setSize(abbreviation));
    }
    
    return (
        <div className="Sizing-Button" onClick={() => handleClick(abbreviation)}>
            <div className="Sizing-Button-Content">
                <p className="abbreviation">
                    { abbreviation }
                    <p className="sizing-name">
                        { name }
                    </p>
                </p>
            </div>
        </div>
    )
}

export default SizingButton; 