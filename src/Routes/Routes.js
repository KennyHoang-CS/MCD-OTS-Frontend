import { Switch } from "react-router";
import { Route, useHistory } from 'react-router-dom';
import Simulator from "../Simulator/Simulator";
import Leaderboard from '../Simulator/Leaderboard/Leaderboard';

function Routes() {
    
    // Create a history object and save the outer route '/leaderboard' because 
    // it will be used to redirect outside of inner routes. 
    const history = useHistory();

    function myLocation () {
        return (
            history.push('/leaderboard')
        )
    }

    // Return the core simulator and leaderboard. 
    return (
        <Switch>
            <Route exact path="/">
                <Simulator myLocation={myLocation}/>
            </Route>
            <Route exact to="/leaderboard">
                <Leaderboard />
            </Route>
        </Switch>
    )
}

export default Routes;