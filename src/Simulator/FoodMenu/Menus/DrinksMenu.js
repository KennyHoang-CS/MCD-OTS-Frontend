import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import { v4 as uuidv4 } from 'uuid';
import '../../../css/MenuUI.css';

// Handles displaying drink 1 menu. 
function DrinksMenu() {
    
    const dispatch = useDispatch();
    const drinksMenu = useSelector(state => state.drinks.menu, shallowEqual);
    
    // use 'react-redux' to load in drink-1 menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DRINKS_MENU', 'drinks'))
    }, [dispatch]);
        
    return (
        // render drinks items as a list of buttons. 
        <div className="Drink-Container Drink-Container-Mobile">
            {drinksMenu && drinksMenu.map(d => 
                <DrinkButton 
                    key={uuidv4()}
                    id={uuidv4()} 
                    name={d.name} 
                    image={d.imagesrc} 
                    sizeable={d.sizeable}
            />)}
        </div>
    )
}

export default DrinksMenu;