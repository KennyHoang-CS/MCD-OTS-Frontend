import '../../../css/FoodUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize } from '../../../Redux/actionCreators'
import { checkItemEligibility, adjustItemName, adjustComboName } from './helpers';

function FoodButton({ name, image, isCombo, sizeable, type, notComboAble }) {
    
    const dispatch = useDispatch();
    let sizeState = useSelector(state => state.size.size, shallowEqual);
    
    function add_to_order(name, isCombo, type) {
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
            count: 1,
            drinkAlert: drinkMsg || '',
            hasCombo: hasCombo
        };
        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
    };

    return (
        <div className="Food-Button" onClick={() => add_to_order(name, isCombo, type)}>
            <div className="Food-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default FoodButton;