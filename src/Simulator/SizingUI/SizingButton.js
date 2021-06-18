import '../../css/SizingBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSize } from '../../Redux/actionCreators';

function SizingButton({ abbreviation, name }) {
    
    const dispatch = useDispatch();
    
    function handleClick(name) {
        dispatch(setSize(name));
    }
    
    return (
        <div className="Sizing-Button" onClick={() => handleClick(name)}>
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