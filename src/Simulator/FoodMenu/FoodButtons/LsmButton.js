import '../../../css/FoodUI.css';

function LsmButton({ name, image }) {
    
    return (
        <div className="LSM-Button">
            <div className="LSM-Content">
                <p>{ name }</p>
                <img src={image} alt="Food Pic"></img>
            </div>
        </div>
    )
}

export default LsmButton;