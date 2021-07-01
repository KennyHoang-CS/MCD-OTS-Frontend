import { NavLink } from 'react-router-dom';
import '../../css/MenuSquareButton.css';

// Handles displaying the one menu as a button. 
function MenuSquareButton({ name1 }) {
    return (
        <div className="Menu-Square-Button">
            <div className="Menu-Square-Content" activeClassName='xd'>
                <NavLink exact to={`/${name1}`}>{ name1 }</NavLink>
            </div>
        </div>
    )
}

export default MenuSquareButton; 