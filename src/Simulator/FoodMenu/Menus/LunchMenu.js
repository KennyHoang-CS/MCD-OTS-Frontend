import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import { uuid } from 'uuidv4';
import '../../../css/MenuUI.css';


function LunchMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lunch.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LUNCH_MENU', 'lunch'))
    }, [dispatch]);

    if (menu) {
       // alert(`menu size: `, menu.length)
    }
        
    return (
        // Render items for lunch 1 menu. 
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

export default LunchMenu;