import UtilityButton from './UtilityButton';
import '../../../css/UtilityUI.css';

export function UtilityBar() {
    return (
        <div className="Utility-Bar Utility-Bar2">
            <UtilityButton name="Clear Choice" />
            <UtilityButton name="Void Item" />
        </div>
    )
}