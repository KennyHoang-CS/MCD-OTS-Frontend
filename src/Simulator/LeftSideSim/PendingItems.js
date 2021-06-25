import { useSelector } from "react-redux";
import Item from "./Item";

function PendingItems() {
    
    const orderState = useSelector(state => state.currentOrder.order);    
    const quantity = useSelector(st => st.quantity.quantity);
    
    const myOrder = 
        orderState
        .map(
        i => 
        <Item id={ i.id } name={ i.name } count={ i.count } drinkAlert={ i.drinkAlert } type={ i.foodType || i.type } comboSize ={ i.comboSize }/>
    );

    console.log('orderState: ', orderState);

    return (
        <div className="Pending-Orders">
            <h2>Quantity: {quantity || 0}</h2>
            { myOrder }
        </div>
    )
}

export default PendingItems;