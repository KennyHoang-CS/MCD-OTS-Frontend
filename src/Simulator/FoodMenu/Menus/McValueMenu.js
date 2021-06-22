import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';

function McValueMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mcvalue.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_MCVALUE_MENU', 'mcvalue'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <FoodButton name={food.name} image={food.imagesrc} isCombo={food.is_combo_item} sizeable={food.sizeable} type={food.type} notComboAble={food.not_combo_able}/>)}
        </div>
    )
}

export default McValueMenu;