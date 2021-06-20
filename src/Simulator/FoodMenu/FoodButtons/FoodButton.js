import '../../../css/FoodUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize } from '../../../Redux/actionCreators'

function FoodButton({ name, image, isCombo }) {
    
    const dispatch = useDispatch();

    let sizeState = useSelector(state => state.size.size, shallowEqual);
    
    function add_to_order(name, isCombo) {
        let drinkMsg;
        let itemName = `${sizeState} ${name}`;
        let hasCombo = false;  
        if(isCombo && sizeState !== '') {
            if (sizeState === 'L') {
                sizeState = 'Ml-Lrg';
            }
            if (sizeState === 'M') {
                sizeState = 'Ml-Md';
            } 
            drinkMsg = 'Select Medium / Large Drink';
            itemName = `${name} ${sizeState}`;
        }
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
        <div className="Food-Button" onClick={() => add_to_order(name, isCombo)}>
            <div className="Food-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default FoodButton;