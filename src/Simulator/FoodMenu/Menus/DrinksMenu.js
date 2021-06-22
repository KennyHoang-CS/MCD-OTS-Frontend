import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';

function DrinksMenu() {
    
    const dispatch = useDispatch();
    const drinksMenu = useSelector(state => state.drinks.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DRINKS_MENU', 'drinks'))
    }, [dispatch]);
        
    return (
        // render drinks items. 
        <div className="Drink-Container">
            {drinksMenu && drinksMenu.map(food => <DrinkButton name={food.name} image={food.imagesrc} sizeable={food.sizeable}/>)}
        </div>
    )
}

export default DrinksMenu;