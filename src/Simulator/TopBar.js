import '../css/NumbersBar.css';
import NumbersBar from './NumbersBar';
import MenuBar from './MenuBar';
import SizingBar from './SizingBar';

function TopBar() {
    
    return (
        <div className="Top-Container">
            <NumbersBar />
            <MenuBar />
            <SizingBar />
        </div>
    )
}

export default TopBar;