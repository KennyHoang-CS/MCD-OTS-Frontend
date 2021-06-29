import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize, setQuantity } from '../../../Redux/actionCreators';
import '../../../css/FoodUI.css';

function DrinkButton({ id, name, image, sizeable }) {
    
    const dispatch = useDispatch();

    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);

    function add_to_order(name, id, sizeable) {
        
        let drinkName; 

        // magic here 
        if (!sizeable) {
            sizeState = '';
            drinkName = name; 
        } else {
            drinkName = `${sizeState || 'M'} ${name}`;
        }
        
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