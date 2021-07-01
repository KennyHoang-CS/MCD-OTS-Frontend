import '../../css/LeftSideSim.css';
import PendingItems from './PendingItems/PendingItems';
import Customers from './Customers/Customers';
import Timer from './Customers/Timer';
import { useSelector, shallowEqual } from 'react-redux';

// Handles displaying the pending order screen and customers game screen. 
function LeftSideSim({ myLocation }) {
    
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);

    return (
        // Render the pending order screen and customers game. 
        <div className="Left-Side-Sim">
            <div className="Current-Items-Container">
                <PendingItems />
            </div>
            <div className="Mock-Orders-Container">
                {!gameStatus && <button className="Leaderboard-Btn" onClick={myLocation}>Leaderboard</button>}
                {gameStatus && <Timer /> }
                <Customers />
            </div>
        </div>
    )
}

export default LeftSideSim;