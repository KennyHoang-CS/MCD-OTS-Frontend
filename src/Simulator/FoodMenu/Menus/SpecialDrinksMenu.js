import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';

function SpecialDrinksMenu() {
    
    const dispatch = useDispatch();
    const drinksMenu = useSelector(state => state.specialDrinks.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_SPECIAL_DRINKS_MENU', 'drinks-2'))
    }, [dispatch]);
        
    return (
        // render drinks items. 
        <div className="Drink-Container-2">
            {drinksMenu && drinksMenu.map(food => <DrinkButton name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default SpecialDrinksMenu;