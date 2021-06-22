import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCurrentOrder, setSize } from '../../../Redux/actionCreators';
import '../../../css/FoodUI.css';
import { useEffect } from 'react';

function DrinkButton({ name, image, sizeable }) {
    
    const dispatch = useDispatch();

    let sizeState = useSelector(state => state.size.size, shallowEqual);

    function add_to_order(name) {
        
        // magic here 
        if (!sizeable) {
            sizeState = '';
        }
        
        let newItem = {
            name: `${sizeState || 'M'} ${name}`,
            count: 1,
            foodType: 'drink'
        };
        dispatch(addToCurrentOrder(newItem));
        dispatch(setSize(''));
    };

    return (
        <div className="Drink-Button" onClick={() => add_to_order(name)}>
            <div className="Drink-Content">
                <p>{ name }</p>
                <img src={image} alt="Drink Pic"></img>
            </div>
        </div>
    )
}

export default DrinkButton;