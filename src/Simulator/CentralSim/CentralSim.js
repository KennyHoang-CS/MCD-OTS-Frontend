import '../../css/NumbersBar.css';
import NumbersBar from '../NumbersUI/NumbersBar';
import MenuBar from '../MenuUI/MenuBar';
import SpecialBar from '../SpecialUI/SpecialBar';
import UserBar from '../UserUI/UserBar';
import MenuRoutes from '../FoodMenu/MenuRoutes/MenuRoutes';
    

function CentralSim() {
    
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