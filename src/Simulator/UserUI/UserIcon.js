import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../../css/UserUI.css';

function UserIcon() {
    return (
        <IconContext.Provider value={{ className: "User-Icon" }}>
            <FaUser size="35px" />
        </IconContext.Provider>
    )
}

export default UserIcon;