import MenuSquareButton2 from './MenuSquareButton2';
import MenuSquareButton from './MenuSquareButton';

function MenuBar() {
    
    return (
        <div className="MenuBar">
            <MenuSquareButton2 name1={'Breakfast'} name2={'Breakfast-2'} />
            <MenuSquareButton2 name1={'Lunch'} name2={'Lunch-2'} />
            <MenuSquareButton2 name1={'McValue'} name2={'Salad'} />
            <MenuSquareButton name1={'Drinks'} />
            <MenuSquareButton name1={'McCafe'} />
            <MenuSquareButton2 name1={'Dessert'} name2={'Dessert-2'} />
            <MenuSquareButton name1={'Happy Meal'} />
            <MenuSquareButton2 name1={'LSM'} name2={'LSM-2'} />
            <MenuSquareButton2 name1={'Condiments'} name2={'Gifts'} />
        </div>
    )
}

export default MenuBar;