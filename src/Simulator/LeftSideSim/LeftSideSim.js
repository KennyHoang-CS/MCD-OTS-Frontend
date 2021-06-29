import '../../css/LeftSideSim.css';
import PendingItems from './PendingItems';
import Customers from './Customers/Customers';
import Timer from './Customers/Timer';
import { useSelector, shallowEqual } from 'react-redux';

function LeftSideSim() {
    
    let gameStatus = useSelector(state => state.game.gameStatus, shallowEqual);
    let getTime = useSelector(state => state.game.time, shallowEqual);

    return (
        <div className="Left-Side-Sim">
            <div className="Current-Items-Container">
                <PendingItems />
            </div>
            <div className="Mock-Orders-Container">
                <h3>Timer is: {getTime}</h3>
                {gameStatus && <Timer /> }
                <Customers />
            </div>
        </div>
    )
}

export default LeftSideSim;