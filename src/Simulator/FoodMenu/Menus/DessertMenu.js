import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchMenuFromAPI } from '../../../Redux/actionCreators';
import DessertButton from "../FoodButtons/DessertButton";
import '../../../css/MenuUI.css';
import { uuid } from 'uuidv4';

function DessertMenu() {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.dessert.menu, shallowEqual);

    useEffect(() => {
        dispatch(fetchMenuFromAPI('LOAD_DESSERT_MENU', 'dessert'))
    }, [dispatch]);
        
    return (
        // render breakfast menu items. 
        <div className="Menu-Container">
            {menu && menu.map(food => <DessertButton id={uuid()} name={food.name} image={food.imagesrc}/>)}
        </div>
    )
}

export default DessertMenu;