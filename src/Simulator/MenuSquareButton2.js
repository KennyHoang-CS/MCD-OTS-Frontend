import '../css/MenuSquareButton.css';

function MenuSquareButton2({ name1, name2 }) {

    let className; 
    if (name1 === 'Happy Meal') {
        className = 'Menu-Square-Content-3';
    } else {
        className = 'Menu-Square-Content';
    }
    
    return (
        <div className="Menu-Square-Button">
            <div className={className}>
                <p className="Subname-1">{ name1 }</p>
                <p className="Subname-2">{ name2 }</p>
            </div>
        </div>
    )
}

export default MenuSquareButton2; 