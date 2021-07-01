import '../../../css/CustomerUI.css';

// Handles rendering the customer. 
export default function Customer({ id, image, order }) {

    return (
        // Return the render of customer with their picture and order. 
        <div className="Customer-Container">
            <div className="Customer-Header">
                <img src={ image } alt="Customer Pic"></img>
                <p>customer #{++id}</p>
            </div>
            <p className="Customer-Order">{ order }</p>
        </div>
    )
}