import { BrowserRouter } from 'react-router-dom';
import '../css/simulator.css';
import LeftSideSim from './LeftSideSim/LeftSideSim';
import TopBar from './TopSim/TopBar';

function Simulator() {
    return (
        <BrowserRouter>
            <div className="Simulator-Container">
                <LeftSideSim />
                <TopBar />
            </div>
        </BrowserRouter>
    )
}

export default Simulator;