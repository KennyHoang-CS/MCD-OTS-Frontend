import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import LsmButton from "../FoodButtons/LsmButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

// Handles displaying the lsm menu. 
function LsmMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lsm.menu, shallowEqual);

    // use 'react-redux' to load in lsm items from backend. 
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LSM_MENU', 'lsm'))
    }, [dispatch]);
        
    return (
        // render LSM menu as a list of buttons. 
        <div className="LSM-Menu-Container">
            {menu && menu.map(food => <LsmButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default LsmMenu;