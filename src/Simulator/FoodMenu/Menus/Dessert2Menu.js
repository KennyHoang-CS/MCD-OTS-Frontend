import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';

function Dessert2Menu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.dessert2.menu, shallowEqual);
    
    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DESSERT2_MENU', 'dessert-2'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <DessertButton name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default Dessert2Menu;