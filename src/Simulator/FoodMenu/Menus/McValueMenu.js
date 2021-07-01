import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying McValue menu. 
function McValueMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mcvalue.menu, shallowEqual);
    
    // use 'react-redux' to load in McValue menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_MCVALUE_MENU', 'mcvalue'))
    }, [dispatch]);
        
    return (
        // Render McValue menu as a list of buttons. 
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

export default McValueMenu;