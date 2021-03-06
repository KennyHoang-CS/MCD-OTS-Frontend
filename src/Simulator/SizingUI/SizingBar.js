import SizingButton from "./SizingButton";
import '../../css/SizingBar.css';

// Handles displaying the sizing bar from extra-small to extra-large, senior size. 
function SizingBar() {
    
    return (
        <div className="Sizing-Bar">
            <SizingButton abbreviation="XS" name="X-Small" />
            <SizingButton abbreviation="S" name="Small" />
            <SizingButton abbreviation="M" name="Medium" />
            <SizingButton abbreviation="L" name="Large" />
            <SizingButton abbreviation="XL" name="X-Large" />
            <SizingButton abbreviation="Sr" name="Senior" />
        </div>
    )
}

export default SizingBar;