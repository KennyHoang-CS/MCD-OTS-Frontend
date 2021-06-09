import '../../css/MenuSquareButton.css';

function MenuSquareButton({ name1}) {
    return (
        <div className="Menu-Square-Button">
            <div className="Menu-Square-Content">
                <p>{ name1 }</p>
            </div>
        </div>
    )
}

export default MenuSquareButton; 