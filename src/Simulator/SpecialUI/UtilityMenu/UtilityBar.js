import UtilityButton from './UtilityButton';
import '../../../css/UtilityUI.css';

// Handles displaying the utility bar. Features include clearing the item choice 
// or voiding the item. 
export function UtilityBar() {
    return (
        <div className="Utility-Bar Utility-Bar2">
            <UtilityButton name="Clear Choice" />
            <UtilityButton name="Void Item" />
        </div>
    )
}