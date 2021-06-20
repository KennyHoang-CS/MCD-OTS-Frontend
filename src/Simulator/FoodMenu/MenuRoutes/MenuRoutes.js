import { Route, Switch } from "react-router-dom";
import BreakfastMenu from "../Menus/BreakfastMenu";
import Breakfast2Menu from "../Menus/Breakfast2Menu";
import LunchMenu from "../Menus/LunchMenu";
import Lunch2Menu from "../Menus/Lunch2Menu";
import DrinksMenu from "../Menus/DrinksMenu";
import SpecialDrinksMenu from '../Menus/SpecialDrinksMenu';
import McCafeMenu from '../Menus/McCafeMenu';
import SaladMenu from '../Menus/SaladMenu';
import McValueMenu from '../Menus/McValueMenu';
import DessertMenu from '../Menus/DessertMenu';
import Dessert2Menu from '../Menus/Dessert2Menu';
import HappyMealMenu from '../Menus/HappyMealMenu';
import LsmMenu from "../Menus/LsmMenu";
import CondimentsMenu from '../Menus/CondimentsMenu';
import SizingBar from "../../SizingUI/SizingBar";
import '../../../css/MenuUI.css';

function MenuRoutes() {
    return (
        <Switch>
            <Route exact path="/">
            <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <LunchMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/breakfast">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <BreakfastMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/breakfast-2">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <Breakfast2Menu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/lunch">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <LunchMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/lunch-2">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <Lunch2Menu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/mcvalue">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <McValueMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/salad">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <SaladMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/drinks">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <SpecialDrinksMenu />
                        <DrinksMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/mccafe">
            <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <McCafeMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/dessert">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <DessertMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/dessert-2">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <Dessert2Menu />
                    </div>
                </div>
            </Route>
            <Route exact path="/happy meal">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <HappyMealMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/lsm">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <LsmMenu />
                    </div>
                </div>
            </Route>
            <Route exact path="/condiments">
                <div className="Menu-Content-Container">
                    <div>
                        <SizingBar />
                    </div>
                    <div className="Menu-Subcontent-Container">
                        <CondimentsMenu />
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default MenuRoutes;