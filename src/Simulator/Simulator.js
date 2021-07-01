import { BrowserRouter } from 'react-router-dom';
import '../css/simulator.css';
import LeftSideSim from './LeftSideSim/LeftSideSim';
import CentralSim from './CentralSim/CentralSim';

function Simulator({ myLocation }) {
    return (
        <BrowserRouter>
            <div className="Simulator-Container">
                <LeftSideSim myLocation={myLocation}/>
                <CentralSim />
            </div>
        </BrowserRouter>
    )
}

/*
<LeftSideSim />
<TopBar />

*/

export default Simulator;