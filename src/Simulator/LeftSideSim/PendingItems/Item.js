import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleItem } from '../../../Redux/actionCreators';

// Handles to display the items on pending orders screen. 
export default function Item({ id, name, count, drinkAlert, type, comboSize }) {
    
    const dispatch = useDispatch();
    
    // Used to display the css background for the item when clicked on. 
    const classNameState = useSelector(st => st.currentItem.className, shallowEqual);
    
    // Get the item id that was clicked on. 
    const itemIdState = useSelector(st => st.currentItem.id, shallowEqual);
    
    // Determine if the item is a combo to determine a drink. 
    let liFlag = false; 
    if (drinkAlert) {
        liFlag = true;
    }

    // Update the current item upon a click. 
    function handleClick(id) {
        dispatch(toggleItem(id));
    }

    // Combo item name flavorings to display fries/hashbrown for lunch/breakfast. 
    let sideChoice;
    if (type === 'Lunch') {
        if (comboSize === 'Ml-Md') {
            sideChoice = 'M Fries';
        } else {
            sideChoice = 'L Fries';
        }
    } else if (type === 'Breakfast') {
        sideChoice = 'Hash Brown';
    }

    // If the combo item has a drink, use the appropiate CSS name. 
    let drinkCSS; 
    if (drinkAlert === 'Select Medium / Large Drink') {
        drinkCSS = 'Item-Drink';
    } else {
        drinkCSS = 'Item-Drink2';
    }

    return (
        // Render the item on the pending orders screen. 
        <ul className={ ((id === itemIdState) && classNameState) || ''} onClick={ () => handleClick(id) }>
            { count } { name }
            { liFlag && 
                <>
                    <li className="Item-Side">{ count } { sideChoice || type } </li>
                    <li className={ drinkCSS }>{ count } { drinkAlert }</li> 
                </>
            }
        </ul>
    )
}