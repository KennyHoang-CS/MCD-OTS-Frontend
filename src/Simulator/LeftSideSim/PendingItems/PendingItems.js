import { useSelector } from "react-redux";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

// Handles displaying the current state of items on the pending orders screen. 
function PendingItems() {
    
    const orderState = useSelector(st => st.currentOrder.order);    
    let customerIdx = useSelector(st => st.game.customerIdx);
    let gameStatus = useSelector(st => st.game.gameStatus);
    
    // Displays the user input choices as a list of items. 
    const myOrder = 
        orderState
        .map(
        i => 
        <Item key={ uuidv4() } id={ i.id } name={ i.name } count={ i.count } drinkAlert={ i.drinkAlert } type={ i.foodType || i.type } comboSize ={ i.comboSize }/>
    );

    return (
        // Renders the items on the pending orders screen.
        <div className="Pending-Orders">
            {gameStatus && <h2>Customer Order #{++customerIdx}</h2>}
            {!gameStatus && <h2>19 Pending Customers</h2>}
            <div className="Orders-Placed">
                { myOrder }
            </div>
        </div>
    )
}

export default PendingItems;