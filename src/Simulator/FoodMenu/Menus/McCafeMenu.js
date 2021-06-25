import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

function McCafeMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mcCafe.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_MCCAFE_MENU', 'mccafe'));
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(d => <DrinkButton id={uuid()} name={d.name} image={d.imagesrc} isCombo={d.is_combo_item} sizeable={d.sizeable} type={d.type}/>)}
        </div>
    )
}

export default McCafeMenu;