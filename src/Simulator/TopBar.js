import '../css/NumbersBar.css';
import NumbersBar from './NumbersBar';
import MenuBar from './MenuBar';

function TopBar() {
    
    return (
        <div className="Top-Container">
            <NumbersBar />
            <MenuBar />
        </div>
    )
}

export default TopBar;