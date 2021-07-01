import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying dessert 1 menu. 
function DessertMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.dessert.menu, shallowEqual);

    // use 'react-redux' to load in dessert 1 menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DESSERT_MENU', 'dessert'))
    }, [dispatch]);
        
    return (
        // Display dessert 1 menu as a list of buttons. 
        <div className="Dessert-Menu-Container">
            {menu && menu.map(food => <DessertButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default DessertMenu;