import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';

function Breakfast2Menu() {
    
    const dispatch = useDispatch();
    const breakfastMenu = useSelector(state => state.breakfast2.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_BREAKFAST2_MENU', 'breakfast-2'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {breakfastMenu && breakfastMenu.map(food => <FoodButton name={food.name} image={food.imagesrc} isCombo={food.is_combo_item} sizeable={food.sizeable} type={food.type} isSoloItem={food.is_solo_item}/>)}
        </div>
    )
}

export default Breakfast2Menu;