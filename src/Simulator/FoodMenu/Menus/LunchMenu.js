import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';

function LunchMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lunch.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LUNCH_MENU', 'lunch'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <FoodButton name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default LunchMenu;