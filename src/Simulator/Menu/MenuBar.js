import MenuSquareButton2 from './MenuSquareButton2';
import MenuSquareButton from './MenuSquareButton';

function MenuBar() {
    
    let menuNames = [['Breakfast', 'Breakfast 2'], ['Lunch', 'Lunch 2'], 
    ['McValue', 'Salad'], 'Drinks', 'McCafe', 
    ['Dessert', 'Dessert 2'], ['Happy Meal', 'B-day Party'], ['LSM', 'LSM 2'], 
    ['Condiments', 'Condiments 2']];
    
    return (
        <div className="MenuBar">
            <MenuSquareButton2 name1={'Breakfast'} name2={'Breakfast-2'} />
            <MenuSquareButton2 name1={'Lunch'} name2={'Lunch-2'} />
            <MenuSquareButton2 name1={'McValue'} name2={'Salad'} />
            <MenuSquareButton name1={'Drinks'} />
            <MenuSquareButton name1={'McCafe'} />
            <MenuSquareButton2 name1={'Dessert'} name2={'Dessert-2'} />
            <MenuSquareButton2 name1={'Happy Meal'} name2={'B-day Party'} />
            <MenuSquareButton2 name1={'LSM'} name2={'LSM-2'} />
            <MenuSquareButton2 name1={'Condiments'} name2={'Gifts'} />
        </div>
    )
}

export default MenuBar;