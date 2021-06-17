import '../../../css/FoodUI.css';
import { useDispatch } from 'react-redux';
import { addToCurrentOrder } from '../../../Redux/actionCreators'

function FoodButton({ name, image }) {
    
    const dispatch = useDispatch();

    function add_to_order(name) {
        let newItem = {
            name,
            count: 1
        };
        dispatch(addToCurrentOrder(newItem));
    };

    return (
        <div className="Food-Button" onClick={() => add_to_order(name)}>
            <div className="Food-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default FoodButton;