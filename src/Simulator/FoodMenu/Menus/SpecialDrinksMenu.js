import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';
import { v4 as uuidv4 } from 'uuid';

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
            {drinksMenu && drinksMenu.map(d => 
                <DrinkButton 
                    key={uuidv4()}
                    id={uuidv4()} 
                    name={d.name} 
                    image={d.imagesrc} 
                    sizeable={d.sizeable}/>
                )
            }
        </div>
    )
}

export default SpecialDrinksMenu;