import { Switch } from "react-router";
import Simulator from "../Simulator/Simulator";
import { Route } from 'react-router-dom';
import HomePage from "../Home/HomePage";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Simulator />
                {/*<HomePage />*/}
            </Route>
            <Route exact path="/playgame">
                <Simulator />
            </Route>
        </Switch>
    )
}

export default Routes;