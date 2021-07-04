import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import { v4 as uuidv4 } from 'uuid';
import '../../../css/MenuUI.css';

// Handles displaying lunch 1 menu.
function LunchMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lunch.menu, shallowEqual);

    // use 'react-redux' to load in lunch 1 menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LUNCH_MENU', 'lunch'))
    }, [dispatch]);
        
    return (
        // Render lunch 1 menu as a list of buttons. 
        <div className="Menu-Container">
            {menu && menu.map(
                food => <FoodButton 
                    key={uuidv4()}
                    id={uuidv4()} 
                    name={food.name} 
                    image={food.imagesrc} 
                    isCombo={food.is_combo_item} 
                    sizeable={food.sizeable} 
                    type={food.type} 
                    notComboAble={food.not_combo_able}
                    comboNumber={food.combo_item_number}
                />)
            }
        </div>
    )
}

export default LunchMenu;