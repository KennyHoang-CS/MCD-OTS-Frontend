import '../../../css/CustomerUI.css';
import Image from './Image';

// Handles rendering the customer. 
export default function Customer({ id, image, order }) {

    return (
        // Return the render of customer with their picture and order. 
        <div className="Customer-Container">
            <div className="Customer-Header">
                <Image src={ image } alt="Customer Pic" />
                <p>customer #{++id}</p>
            </div>
            <p className="Customer-Order">{ order }</p>
        </div>
    )
}
