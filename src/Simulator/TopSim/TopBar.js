import '../../css/NumbersBar.css';
import NumbersBar from '../NumbersUI/NumbersBar';
import MenuBar from '../Menu/MenuBar';
import SizingBar from '../SizingUI/SizingBar';
import SpecialBar from '../SpecialUI/SpecialBar';
import UserBar from '../UserUI/UserBar';

function TopBar() {
    
    return (
        <div className="Top-Container">
            <UserBar />
            <SpecialBar />
            <NumbersBar />
            <MenuBar />
            <SizingBar />
        </div>
    )
}

export default TopBar;