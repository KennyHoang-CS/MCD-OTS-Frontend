import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../../css/UserUI.css';

// Handle displaying the user icon.
function UserIcon() {
    return (
        <IconContext.Provider value={{ className: "User-Icon" }}>
            <FaUser size="25px" />
        </IconContext.Provider>
    )
}

export default UserIcon;