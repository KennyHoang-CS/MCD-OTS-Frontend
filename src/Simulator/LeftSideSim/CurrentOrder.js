import { useSelector } from "react-redux";

function CurrentOrder() {
    
    const orderState = useSelector(state => state.currentOrder.order);    
    const myOrder = 
        orderState
        .map(
        item => 
        
        <ul className="Item-Wrapper">
            {item.count} {item.name}
            <li>
                {item.drinkAlert}
            </li>
        </ul>
    
    );

    console.log('orderState: ', orderState);

    // order = [ {name, count}, ... ]

    return (
        <div className="Pending-Orders">
            <h2>Pending Items</h2>
            { myOrder }
        </div>
    )
}

export default CurrentOrder;