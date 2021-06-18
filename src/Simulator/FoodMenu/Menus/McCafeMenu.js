import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DrinkButton from "../FoodButtons/DrinkButton";
import '../../../css/MenuUI.css';

function McCafeMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mcCafe.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_MCCAFE_MENU', 'mccafe'));
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <DrinkButton name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default McCafeMenu;