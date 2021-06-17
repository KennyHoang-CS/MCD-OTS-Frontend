import '../../css/SizingBar.css';

function SizingButton({ abbreviation, name }) {
    
    function handleClick(name) {
        alert(name);
    }
    
    return (
        <div className="Sizing-Button" onClick={() => handleClick(name)}>
            <div className="Sizing-Button-Content">
                <p className="abbreviation">
                    { abbreviation }
                    <p className="sizing-name">
                        { name }
                    </p>
                </p>
            </div>
        </div>
    )
}

export default SizingButton; 