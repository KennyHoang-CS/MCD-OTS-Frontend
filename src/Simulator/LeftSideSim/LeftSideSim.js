import '../../css/LeftSideSim.css';
import PendingItems from './PendingItems';

function LeftSideSim() {
    return (
        <div className="Left-Side-Sim">
            <div className="Current-Items-Container">
                <PendingItems />
            </div>
            <div className="Mock-Orders-Container">
                Mock Orders goes here.
            </div>
        </div>
    )
}

export default LeftSideSim;