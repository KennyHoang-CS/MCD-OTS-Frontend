import { BrowserRouter } from 'react-router-dom';
import '../css/simulator.css';
import LeftSideSim from './LeftSideSim/LeftSideSim';
import TopBar from './TopSim/TopBar';

function Simulator({ myLocation }) {
    return (
        <BrowserRouter>
            <div className="Simulator-Container">
                <LeftSideSim myLocation={myLocation}/>
                <TopBar />
            </div>
        </BrowserRouter>
    )
}

/*
<LeftSideSim />
<TopBar />

*/

export default Simulator;