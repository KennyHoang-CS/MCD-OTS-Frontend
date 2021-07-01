import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying special drinks menu like smoothies, milk, and etc. 
function SpecialDrinksMenu() {
    
    const dispatch = useDispatch();
    const drinksMenu = useSelector(state => state.specialDrinks.menu, shallowEqual);
    
    // use 'react-redux' to load in special drinks menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_SPECIAL_DRINKS_MENU', 'drinks-2'))
    }, [dispatch]);
        
    return (
        // render drinksMenu as a list of buttons.  
        <div className="Drink-Container-2">
            {drinksMenu && drinksMenu.map(d => <DrinkButton id={uuid()} name={d.name} image={d.imagesrc} sizeable={d.sizeable}/>)}
        </div>
    )
}

export default SpecialDrinksMenu;