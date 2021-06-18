import { useSelector } from "react-redux";

function CurrentOrder() {
    
    const orderState = useSelector(state => state.currentOrder.order);    
    const myOrder = orderState.map(item => <li>{item.count} {item.name}</li>);

    console.log('orderState: ', orderState);

    // order = [ {name, count}, ... ]

    return (
        <div className="Current-Item">
            <h2>Pending Items</h2>
            { myOrder }
        </div>
    )
}

export default CurrentOrder;