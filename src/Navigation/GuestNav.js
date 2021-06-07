import { Route, NavLink } from 'react-router-dom';

/** Guest users will see these links if they aren't logged in */

function GuestNav() {
    return (
        <div>
            <Route>
                <NavLink expact to="/login">Login</NavLink>
            </Route>
            <Route>
                <NavLink expact to="/signup">Sign up</NavLink>
            </Route>
        </div>
    )
}

export default GuestNav; 