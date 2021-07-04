import { useSelector, shallowEqual } from "react-redux";
import '../../css/UserUI.css';
import UserIcon from './UserIcon';

// Handles displaying the top bar that has the linkedin url, time, and date. 
function UserBar() {

    let today = new Date(),

    // get the current date. 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    // get the current time. 
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    let messageState = useSelector(state => state.message.message, shallowEqual);

    return (
        <div className="User-Bar-Container">
            <div className="User-Content">
                <p className="User-Logged">User Logged</p>
                <UserIcon />
            </div>
            <div>
            <div className="User-Top">
                <p>{time}</p>
                <p className="User-Top-White-Box"></p>
                <p>https://www.linkedin.com/in/kennyhoang-cs/</p>
                <p>{date}</p>
            </div>
            <div className="User-Bottom">
                <p>{messageState || 'Message Status: '}</p>
            </div>
            </div>
        </div>
    )
}

export default UserBar;