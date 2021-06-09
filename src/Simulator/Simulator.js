import '../css/simulator.css';
import LeftSideSim from './LeftSideSim/LeftSideSim';
import TopBar from './TopSim/TopBar';

function Simulator() {
    return (
        <div className="Simulator-Container">
            <LeftSideSim />
            <TopBar />
        </div>
    )
}

export default Simulator;