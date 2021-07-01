import MenuSquareButton2 from './MenuSquareButton2';
import MenuSquareButton from './MenuSquareButton';
import '../../css/MenuUI.css';

// Handles displaying the menus as a list of menu buttons.
function MenuBar() {
    
    return (
        <div className="MenuBar">
            <div className="Left-Menu-Bar">
                <MenuSquareButton2 name1={'Breakfast'} name2={'Breakfast-2'} />
                <MenuSquareButton2 name1={'Lunch'} name2={'Lunch-2'} />
                <MenuSquareButton2 name1={'McValue'} name2={'Salad'} />
                <MenuSquareButton name1={'Drinks'} />
                <MenuSquareButton name1={'McCafe'} />
            </div>
            <div className="Right-Menu-Bar">
                <MenuSquareButton2 name1={'Dessert'} name2={'Dessert-2'} />
                <MenuSquareButton name1={'Happy Meal'} />
                <MenuSquareButton2 name1={'LSM'} name2={'LSM-2'} />
                <MenuSquareButton2 name1={'Condiments'} name2={'Gifts'} />
            </div>
        </div>
    )
}

export default MenuBar;