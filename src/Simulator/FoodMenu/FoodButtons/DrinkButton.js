import { useDispatch } from 'react-redux';
import { addToCurrentOrder } from '../../../Redux/actionCreators'
import '../../../css/FoodUI.css';

function DrinkButton({ name, image }) {
    
    const dispatch = useDispatch();

    function add_to_order(name) {
        let newItem = {
            name,
            count: 1
        };
        dispatch(addToCurrentOrder(newItem));
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