import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import FoodButton from "../FoodButtons/FoodButton";
import '../../../css/MenuUI.css';
import { v4 as uuidv4 } from 'uuid';

// Handles displaying breakfast 2 menu. 
function Breakfast2Menu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.breakfast2.menu, shallowEqual);
    const [isLoading, setIsLoading] = useState(true);

    // Load in our breakfast 2 menu from API using react-redux. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_BREAKFAST2_MENU', 'breakfast-2'))
        setIsLoading(false); 
    }, [dispatch]);
        
    return (
        // To display breakfast 2 menu as a list of buttons. 
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

export default Breakfast2Menu;