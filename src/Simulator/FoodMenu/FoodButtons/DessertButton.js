import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize } from '../../../Redux/actionCreators'
import { checkDessertSizeEligibility } from './helpers';
import '../../../css/FoodUI.css';

function DessertButton({ name, image, id }) {
    
    const dispatch = useDispatch();
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    
    function add_to_order(name) {
        
        let dessertFailStatus = checkDessertSizeEligibility(sizeState);

        if (dessertFailStatus) {
            alert('Option not available.');
            dispatch(setSize(''));
            return; 
        }
        
        let newItem = {
            name,
            count: 1,
            id
        };
        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
    };

    return (
        <div className="Dessert-Button" onClick={() => add_to_order(name, id)}>
            <div className="Dessert-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default DessertButton;