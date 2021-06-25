import '../../../css/FoodUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize, setQuantity } from '../../../Redux/actionCreators'
import { checkItemEligibility, adjustItemName, adjustComboName } from './helpers';

function FoodButton({ id, name, image, isCombo, sizeable, type, notComboAble }) {
    
    const dispatch = useDispatch();
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);
    
    function add_to_order(name, isCombo, type, id) {
        
        let drinkMsg;
        let itemName;

        let itemFailedStatus = checkItemEligibility(isCombo, notComboAble, sizeState, sizeable, type);

        if (itemFailedStatus) {
            alert('Option not available.');
            dispatch(setSize(''));
            return; 
        }
        
        itemName = adjustItemName(name, sizeState, isCombo, sizeable);
     
        if(isCombo && sizeState !== '') {
            sizeState = adjustComboName(sizeState, type);
            drinkMsg = 'Select Medium / Large Drink';
            itemName = `${name} ${sizeState}`;
        }
        
        let hasCombo = false; 
        if(sizeState !== '' && isCombo) {
            hasCombo = true;
        }
        
        let newItem = {
            name: itemName,
            count: +quantityState || 1,
            drinkAlert: drinkMsg || '',
            hasCombo: hasCombo,
            id,
            type,
            comboSize: sizeState
        };

        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
        dispatch(setQuantity(''));
    };

    return (
        <div className="Food-Button" onClick={() => add_to_order(name, isCombo, type, id)}>
            <div className="Food-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default FoodButton;