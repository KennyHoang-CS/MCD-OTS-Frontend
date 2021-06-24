import '../../../css/UtilityUI.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { removeItem, removeDrinkFromMeal, setCurrentItemDefault } from '../../../Redux/actionCreators';

export default function UtilityButton({ name }) {

    const dispatch = useDispatch(); 
    const itemIdState = useSelector(st => st.currentItem.id, shallowEqual);

    function handleClick(name) {
        if (name === 'Clear Choice') clearChoice(); 
        if (name === 'Void Item') voidItem(); 
    }

    function clearChoice() {
        dispatch(removeDrinkFromMeal(itemIdState));
    }

    function voidItem() {
        dispatch(removeItem(itemIdState));
        dispatch(setCurrentItemDefault());
    }

    return (
        <div className="Utility-Button" onClick={ () => handleClick(name)}>
            { name }
        </div>
    )
}
