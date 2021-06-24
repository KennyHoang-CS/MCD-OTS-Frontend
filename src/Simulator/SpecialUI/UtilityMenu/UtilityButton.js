import '../../../css/UtilityUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { removeItem, removeDrinkFromMeal, setCurrentItemDefault } from '../../../Redux/actionCreators';

export default function UtilityButton({ name }) {

    const dispatch = useDispatch(); 
    const itemNameState = useSelector(st => st.currentItem.name);

    function handleClick(name) {
        if (name === 'Clear Choice') clearChoice(); 
        if (name === 'Void Item') voidItem(); 
    }

    function clearChoice() {
        dispatch(removeDrinkFromMeal(itemNameState));
    }

    function voidItem() {
        dispatch(setCurrentItemDefault());
        dispatch(removeItem(itemNameState));
    }

    return (
        <div className="Utility-Button" onClick={ () => handleClick(name)}>
            { name }
        </div>
    )
}
