import '../css/MenuSquareButton.css';

function MenuSquareButton({ name1, name2 }) {
    return (
        <div className="Menu-Square-Button">
            <div className="Menu-Square-Content">
                <p className="Subname-1">{ name1 }</p>
                <p className="Subname-2">{ name2 }</p>
            </div>
        </div>
    )
}

export default MenuSquareButton; 