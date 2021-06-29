import '../../css/LeftSideSim.css';
import PendingItems from './PendingItems';
import Customers from './Customers/Customers';
import Timer from './Customers/Timer';
import { useSelector, shallowEqual } from 'react-redux';

function LeftSideSim({ myLocation }) {
    
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);

    return (
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