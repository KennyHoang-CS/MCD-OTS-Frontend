import '../../../css/FoodUI.css';

function DrinkButton({ name, image }) {
    
    return (
        <div className="Drink-Button">
            <div className="Drink-Content">
                <p>{ name }</p>
                <img src={image} alt="Drink Pic"></img>
            </div>
        </div>
    )
}

export default DrinkButton;