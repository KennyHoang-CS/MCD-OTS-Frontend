import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';
import { v4 as uuidv4 } from 'uuid';

// Handles displaying McCafe menu. 
function McCafeMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mcCafe.menu, shallowEqual);
    
    // use 'react-redux' to load in McCafe menu from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_MCCAFE_MENU', 'mccafe'));
    }, [dispatch]);
        
    return (
        // render McCafe menu as a list of buttons.  
        <div className="McCafe-Container">
            {menu && menu.map(d => 
                <DrinkButton 
                    key={uuidv4()}
                    id={uuidv4()} 
                    name={d.name} 
                    image={d.imagesrc} 
                    isCombo={d.is_combo_item} 
                    sizeable={d.sizeable} 
                    type={d.type}/>
                )
            }
        </div>
    )
}

export default McCafeMenu;