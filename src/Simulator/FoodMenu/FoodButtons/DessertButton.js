import '../../../css/FoodUI.css';

function DessertButton({ name, image }) {
    
    return (
        <div className="Dessert-Button">
            <div className="Dessert-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default DessertButton;