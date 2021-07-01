import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import { uuid } from 'uuidv4';
import '../../../css/MenuUI.css';

function DrinksMenu() {
    
    const dispatch = useDispatch();
    const drinksMenu = useSelector(state => state.drinks.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DRINKS_MENU', 'drinks'))
    }, [dispatch]);
        
    return (
        // render drinks items. 
        <div className="Drink-Container Drink-Container-Mobile">
            {drinksMenu && drinksMenu.map(d => <DrinkButton id={uuid()} name={d.name} image={d.imagesrc} sizeable={d.sizeable}/>)}
        </div>
    )
}

export default DrinksMenu;