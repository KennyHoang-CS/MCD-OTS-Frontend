import { useSelector } from "react-redux";
import Item from "./Item";

function PendingItems() {
    
    const orderState = useSelector(st => st.currentOrder.order);    
    let customerIdx = useSelector(st => st.game.customerIdx);
    let gameStatus = useSelector(st => st.game.gameStatus);
    
    const myOrder = 
        orderState
        .map(
        i => 
        <Item id={ i.id } name={ i.name } count={ i.count } drinkAlert={ i.drinkAlert } type={ i.foodType || i.type } comboSize ={ i.comboSize }/>
    );

   // console.log('orderState: ', orderState);

    return (
        <div className="Pending-Orders">
            {gameStatus && <h2>Customer Order #{++customerIdx}</h2>}
            {!gameStatus && <h2>Pending Customers</h2>}
            { myOrder }
        </div>
    )
}

export default PendingItems;