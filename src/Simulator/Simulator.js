import { BrowserRouter } from 'react-router-dom';
import '../css/simulator.css';
import LeftSideSim from './LeftSideSim/LeftSideSim';
import TopBar from './TopSim/TopBar';
import Leaderboard from './Leaderboard';

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