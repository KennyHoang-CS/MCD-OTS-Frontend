import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { v4 as uuidv4 } from 'uuid';

// Handles displaying salad menu. 
function SaladMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.salad.menu, shallowEqual);

    // use 'react-redux' to load in salad menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_SALAD_MENU', 'salad'))
    }, [dispatch]);
        
    return (
        // Render salad menu as a list of buttons. 
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

export default SaladMenu;