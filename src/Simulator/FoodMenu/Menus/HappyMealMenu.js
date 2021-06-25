import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

function HappyMealMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.happyMeal.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_HAPPY_MEAL_MENU', 'happy-meal'));
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <DessertButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default HappyMealMenu;