import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize, setQuantity, setMessage } from '../../../Redux/actionCreators'
import { checkDessertSizeEligibility } from './helpers';
import '../../../css/FoodUI.css';

// Function that displays the dessert item as a button. 
function DessertButton({ name, image, id }) {
    
    const dispatch = useDispatch();
    
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);
    
    // Function that adds an item to the pending orders screen. 
    function add_to_order(name) {
        
        // Check if dessert item meets size criteria, can't get a extra large cookie. 
        let dessertFailStatus = checkDessertSizeEligibility(sizeState);

        // Display alert message if dessert size failed. 
        if (dessertFailStatus) {
            dispatch(setMessage(`Option not available for ${name}.`));
            dispatch(setSize(''));
            return; 
        }
        
        // If dessert item meets size requirements, add it to pending orders. 
        let newItem = {
            name,
            count: +quantityState || 1,
            id
        };
        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
        dispatch(setMessage(''));
        dispatch(setQuantity(''));
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