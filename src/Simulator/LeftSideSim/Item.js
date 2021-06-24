import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleItem, setCurrentItemDefault } from '../../Redux/actionCreators';

export default function Item({ id, name, count, drinkAlert}) {
    
    const dispatch = useDispatch();
    const classNameState = useSelector(st => st.currentItem.className, shallowEqual);
    const itemState = useSelector(st => st.currentItem.id, shallowEqual);
    let liFlag = false; 
    
    if (drinkAlert) {
        liFlag = true;
    }

    function handleClick(id) {
        dispatch(toggleItem(id));
    }

    return (
        <ul className={ (id === itemState) && classNameState } onClick={ () => handleClick(id) }>
            { count } { name }
            { liFlag && <li>{ drinkAlert }</li> }
        </ul>
    )
}