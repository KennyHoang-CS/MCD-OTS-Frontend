import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleItem, setCurrentItemDefault } from '../../Redux/actionCreators';

export default function Item({ name, count, drinkAlert}) {
    
    const dispatch = useDispatch();
    const classNameState = useSelector(st => st.currentItem.className, shallowEqual);
    const itemState = useSelector(st => st.currentItem.name, shallowEqual);
    let liFlag = false; 
    
    if (drinkAlert) {
        liFlag = true;
    }

    function handleClick(name) {
        dispatch(toggleItem(name));
        //dispatch(setCurrentItemDefault());
    }

    return (
        <ul className={ (name === itemState) && classNameState } onClick={ () => handleClick(name) }>
            { count } { name }
            { liFlag && <li>{ drinkAlert }</li> }
        </ul>
    )
}