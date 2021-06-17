import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getCurrentOrder, addToCurrentOrder } from "../../Redux/actionCreators";

function CurrentOrder() {
    
    const dispatch = useDispatch();
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