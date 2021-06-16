import '../../../css/FoodUI.css';

function FoodButton({ name, image }) {
    
    return (
        <div className="Food-Button">
            <div className="Food-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default FoodButton;