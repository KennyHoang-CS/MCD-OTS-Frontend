import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying the happy meal menu. 
function HappyMealMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.happyMeal.menu, shallowEqual);
    
    // use 'react-redux' to load in happy meals from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_HAPPY_MEAL_MENU', 'happy-meal'));
    }, [dispatch]);
        
    return (
        // render happy meal items as a list of buttons.  
        <div className="Happy-Meals-Container">
            {menu && menu.map(food => <DessertButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default HappyMealMenu;