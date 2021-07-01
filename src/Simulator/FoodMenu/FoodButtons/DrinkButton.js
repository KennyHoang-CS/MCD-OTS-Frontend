import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize, setQuantity } from '../../../Redux/actionCreators';
import '../../../css/FoodUI.css';

// Function that display the drink as a button. 
function DrinkButton({ id, name, image, sizeable }) {
    
    const dispatch = useDispatch();

    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);

    // Function that adds an item to the pending orders screen. 
    function add_to_order(name, id, sizeable) {
        
        let drinkName; 

        // Eligible drinks' sizes are medium by default, if not selected by size. 
        if (!sizeable) {
            sizeState = '';
            drinkName = name; 
        } else {
            drinkName = `${sizeState || 'M'} ${name}`;
        }
        
        // Add the drink to pending orders screen. 
        let newItem = {
            name: drinkName,
            count: +quantityState || 1,
            foodType: 'drink',
            id
        };
        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
        dispatch(setQuantity(''));
    };

    return (
        <div className="Drink-Button" onClick={() => add_to_order(name, id, sizeable)}>
            <div className="Drink-Content">
                <p>{ name }</p>
                <img src={image} alt="Drink Pic"></img>
            </div>
        </div>
    )
}

export default DrinkButton;