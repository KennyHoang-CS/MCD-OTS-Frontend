import '../../../css/FoodUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize, setQuantity, setMessage } from '../../../Redux/actionCreators'
import { checkItemEligibility, adjustItemName, adjustComboName } from './helpers';
import { uuid } from 'uuidv4';

// Function that displays the food item as a button. 
function FoodButton({ id, name, image, isCombo, sizeable, type, notComboAble, comboNumber, flag }) {
    
    const dispatch = useDispatch();
    
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    let quantityState = useSelector(state => state.quantity.quantity, shallowEqual);
    
    // Function that adds the food item to the pending orders screen. 
    function add_to_order(name, isCombo, type, id) {
        
        let drinkMsg;
        let itemName;
        
        // Check if food item meets requirements, can't get a extra small sized lunch meal i.e.
        // Some items are not eligible for a combo like the McChicken, McDouble, etc. 
        let itemFailedStatus = checkItemEligibility(isCombo, notComboAble, sizeState, sizeable, type);

        // Display an alert message if requirements failed. 
        if (itemFailedStatus) {
            dispatch(setMessage(`Option not available for ${name}.`));
            dispatch(setSize(''));
            return; 
        }
        
        // Adjust the food item name and give it name flavoring. 
        itemName = adjustItemName(name, sizeState, isCombo, sizeable);
        
        // If item is a combo with an eligible size and give it combo name flavoring
        // like Ml-Lrg for large combos and Ml-Md for medium combos. 
        if(isCombo && sizeState !== '') {
            sizeState = adjustComboName(sizeState, type);
            drinkMsg = 'Select Medium / Large Drink';
            itemName = `${name} ${sizeState}`;
        }
        
        // If the item is combo-able, set the hasCombo to true, so drinks
        // can be inserted into it through real-time. 
        let hasCombo = false; 
        if(sizeState !== '' && isCombo) {
            hasCombo = true;
        }
        
        // Create the item and insert it into pending orders screen. 
        let newItem = {
            name: itemName,
            count: +quantityState || 1,
            drinkAlert: drinkMsg || '',
            hasCombo: hasCombo,
            id: uuid(),
            type,
            comboSize: sizeState
        };

        dispatch(addToCurrentOrder(newItem));
        dispatch(setMessage(''));
        dispatch(setSize(''));
        dispatch(setQuantity(''));
    };

    return (
        <div className="Food-Button" onClick={() => add_to_order(name, isCombo, type, id)}>
            <div className="Food-Content">
                <p>{ name }</p>
                <div className="Food-Body">
                    <img src={ image } alt="Food Pic"></img>
                    {(comboNumber !== '999' && flag !== 'sauce') && <div>{ comboNumber }</div>}
                </div>
            </div>
        </div>
    )
}

export default FoodButton;