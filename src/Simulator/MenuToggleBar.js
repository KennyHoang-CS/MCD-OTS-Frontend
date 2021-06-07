import MenuSquareButton from "./MenuSquareButton";
import '../css/MenuToggleBar.css';

function MenuToggleBar() {

    let menuNames = ['Breakfast', 'Lunch', 'McValue', 
    'Drinks', 'McCafe', 'Dessert', 'Happy Meal', 'LSM', 'Condiments'];

    return (
        <div className="">
            { menuNames.map(n => <MenuSquareButton name={n}/>) }
        </div>
    )
}

export default MenuToggleBar;