import '../../../css/UtilityUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { removeItem, removeDrinkFromMeal, setCurrentItemDefault } from '../../../Redux/actionCreators';

// Handles the utility button rendering and click event. 
export default function UtilityButton({ name }) {

    const dispatch = useDispatch(); 
    const itemIdState = useSelector(st => st.currentItem.id, shallowEqual);

    // Determine which utility button was clicked on using the name. 
    function handleClick(name) {
        if (name === 'Clear Choice') clearChoice(); 
        if (name === 'Void Item') voidItem(); 
    }

    // Call redux to remove the drink from the item combo. 
    function clearChoice() {
        if (itemIdState === '') return; // error prevention. 
        dispatch(removeDrinkFromMeal(itemIdState));
        dispatch(setCurrentItemDefault());
    }

    // Call redux to remove that item from pending orders screen. 
    function voidItem() {
        dispatch(removeItem(itemIdState));
        dispatch(setCurrentItemDefault());
    }

    // Render the utility button with its name and click event. 
    return (
        <div className="Utility-Button" onClick={ () => handleClick(name)}>
            { name }
        </div>
    )
}
