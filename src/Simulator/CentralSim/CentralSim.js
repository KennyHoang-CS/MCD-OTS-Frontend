import '../../css/NumbersBar.css';
import NumbersBar from '../NumbersUI/NumbersBar';
import MenuBar from '../MenuUI/MenuBar';
import SpecialBar from '../SpecialUI/SpecialBar';
import UserBar from '../UserUI/UserBar';
import MenuRoutes from '../FoodMenu/MenuRoutes/MenuRoutes';
    
function CentralSim() {
    
    // UserBar -- holds the information about the programmer along with current date and time.
    // SpecialBar -- holds the sizing and quantity info. 
    // NumbersBar -- holds the number circles 1-9. 
    // MenuBar -- holds all the menu names. 
    // MenuRoutes -- controls what menu of food items to show when clicked on navlink.
    
    return (
        <div className="Top-Container">
            <UserBar />
            <SpecialBar />
            <NumbersBar />
            <MenuBar />
            <MenuRoutes />
        </div>
    )
}

export default CentralSim;