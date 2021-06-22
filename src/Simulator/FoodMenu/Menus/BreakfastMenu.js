import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';

function BreakfastMenu() {
    
    const dispatch = useDispatch();
    const breakfastMenu = useSelector(state => state.breakfast.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_BREAKFAST_MENU', 'breakfast'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {breakfastMenu && breakfastMenu.map(food => <FoodButton name={food.name} image={food.imagesrc} isCombo={food.is_combo_item} sizeable={food.sizeable} type={food.type} notComboAble={food.not_combo_able}/>)}
        </div>
    )
}

export default BreakfastMenu;