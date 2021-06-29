import '../../../css/CustomerUI.css';

export default function Customer({ id, image, order }) {


    return (
        <div className="Customer-Container">
            <div className="Customer-Header">
                <img src={ image } alt="Customer Pic"></img>
                <p>customer #{++id}</p>
            </div>
            <p className="Customer-Order">{ order }</p>
        </div>
    )
}