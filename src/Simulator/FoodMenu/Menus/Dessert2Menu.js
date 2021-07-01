import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying dessert 2 menu. 
function Dessert2Menu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.dessert2.menu, shallowEqual);
    
    // Use react-redux to load in dessert 2 menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DESSERT2_MENU', 'dessert-2'))
    }, [dispatch]);
        
    return (
        // Display dessert 2 menu as a list of buttons. 
        <div className="Dessert-Menu-Container">
            {menu && menu.map(food => <DessertButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default Dessert2Menu;