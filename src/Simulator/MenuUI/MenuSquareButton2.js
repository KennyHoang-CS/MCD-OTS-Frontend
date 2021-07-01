import { NavLink } from 'react-router-dom';
import '../../css/MenuSquareButton.css';

// Handles displaying two menus as a button. 
function MenuSquareButton2({ name1, name2 }) {

    // Some menus will have different CSS styles. 
    let className; 
    if (name1 === 'Happy Meal') {
        className = 'Menu-Square-Content-3';
    } else {
        className = 'Menu-Square-Content';
    }
    
    return (
        <div className="Menu-Square-Button">
            <div className={className}>
                <NavLink className="Subname-1" exact to={`/${name1}`}>
                    { name1 }
                </NavLink>
                <NavLink className="Subname-2" exact to={`/${name2}`}>
                    { name2 }
                </NavLink>
            </div>
        </div>
    )
}

export default MenuSquareButton2; 