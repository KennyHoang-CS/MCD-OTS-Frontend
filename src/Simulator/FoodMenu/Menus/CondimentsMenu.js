import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying condiments.
function CondimentsMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.condiments.menu, shallowEqual);

    // Use react-redux to load in our condiments from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_CONDIMENTS_MENU', 'condiments'))
    }, [dispatch]);
        
    return (
        // Display condiments menu as a list of buttons. 
        <div className="Condiments-Container">
            {menu && menu.map(food => <FoodButton id={uuid()} name={food.name} image={food.imagesrc} flag="sauce"/>)}
        </div>
    )
}

export default CondimentsMenu;