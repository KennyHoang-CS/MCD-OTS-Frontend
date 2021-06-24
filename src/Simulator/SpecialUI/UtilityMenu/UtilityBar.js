import UtilityButton from './UtilityButton';
import '../../../css/UtilityUI.css';

export function UtilityBar() {
    return (
        <div className="Utility-Bar">
            <UtilityButton name="Clear Choice" />
            <UtilityButton name="Void Item" />
        </div>
    )
}