import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import LsmButton from "../FoodButtons/LsmButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

function LsmMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.lsm.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_LSM_MENU', 'lsm'))
    }, [dispatch]);
        
    return (
        // render LSM menu items. 
        <div className="LSM-Menu-Container">
            {menu && menu.map(food => <LsmButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default LsmMenu;