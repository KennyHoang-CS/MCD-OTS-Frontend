import { Switch } from "react-router";
import Simulator from "../Simulator/Simulator";
import { Route } from 'react-router-dom';
import HomePage from "../Home/HomePage";
import Leaderboard from "../Simulator/Leaderboard";

import { useHistory } from 'react-router-dom'


function Routes() {
    
    const history = useHistory();

    function myLocation () {
        return (
            history.push('/leaderboard')
        )
    }

    return (
        <Switch>
            <Route exact path="/">
                {/*<NavLink to="/leaderboard">Leaderboard</NavLink>*/}
                <Simulator myLocation={myLocation}/>
                {/*<HomePage />*/}
            </Route>
            <Route exact to="/leaderboard">
                <Leaderboard />
            </Route>
        </Switch>
    )
}

export default Routes;