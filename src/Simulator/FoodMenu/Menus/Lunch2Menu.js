import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying lunch 2 menu.
function Lunch2Menu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lunch2.menu, shallowEqual);

    // use 'react-redux' to load in lunch 2 menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LUNCH2_MENU', 'lunch-2'))
    }, [dispatch]);
        
    return (
        // Render lunch-2 menu as a list of buttons.
        <div className="Menu-Container">
            {menu && menu.map(
                food => <FoodButton 
                    id={uuid()} 
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

export default Lunch2Menu;