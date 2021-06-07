import { NavLink, Route } from "react-router-dom";


function NavBar() {
    return (
        <div className="Nav-Bar">
            <Route>
                <NavLink exact to="/playgame">Start Game</NavLink>
                <NavLink exact to="/">Go back</NavLink>
            </Route>
            {/*
            <div className="Nav-Wrapper">
                <div className="Left-Links">
                    <Route>
                        <NavLink exact to="/">MCD OTS</NavLink>
                    </Route>
                </div>
                <div className="Right-Links">
                    <Route>
                        <NavLink exact to="/">Home</NavLink>
                    </Route>
                    <Route>
                        <NavLink exact to="/startgame">Start Game</NavLink>
                    </Route>
                    <Route>
                        <NavLink exact to="/scores">Scores</NavLink>
                    </Route>
                    <GuestNav />
                </div>
            </div>
                */}
        </div>
    )
}

export default NavBar;