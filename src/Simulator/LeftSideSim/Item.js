import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleItem, setCurrentItemDefault } from '../../Redux/actionCreators';

export default function Item({ id, name, count, drinkAlert, type, comboSize }) {
    
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

    let drinkCSS; 

    if (drinkAlert === 'Select Medium / Large Drink') {
        drinkCSS = 'Item-Drink';
    } else {
        drinkCSS = 'Item-Drink2';
    }

    return (
        <ul className={ (id === itemState) && classNameState } onClick={ () => handleClick(id) }>
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