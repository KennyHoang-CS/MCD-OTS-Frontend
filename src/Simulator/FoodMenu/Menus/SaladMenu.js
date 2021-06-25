import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

function SaladMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.salad.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_SALAD_MENU', 'salad'))
    }, [dispatch]);
        
    return (
        // Render items for Salad menu. 
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

export default SaladMenu;