import { useDispatch } from 'react-redux';
import { addToCurrentOrder } from '../../../Redux/actionCreators';
import '../../../css/FoodUI.css';

function DessertButton({ name, image }) {
    
    const dispatch = useDispatch();

    function add_to_order(name) {
        let newItem = {
            name,
            count: 1
        };
        dispatch(addToCurrentOrder(newItem));
    };

    return (
        <div className="Dessert-Button" onClick={() => add_to_order(name)}>
            <div className="Dessert-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default DessertButton;