import '../css/SizingBar.css';

function SizingButton({ abbreviation, name }) {
    return (
        <div className="Sizing-Button">
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