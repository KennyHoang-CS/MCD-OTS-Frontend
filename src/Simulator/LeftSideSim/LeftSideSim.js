import '../../css/LeftSideSim.css';
import CurrentOrder from './CurrentOrder';

function LeftSideSim() {
    return (
        <div className="Left-Side-Sim">
            <div className="Current-Items-Container">
                <CurrentOrder />
            </div>
            <div className="Mock-Orders-Container">
                Mock Orders goes here.
            </div>
        </div>
    )
}

export default LeftSideSim;