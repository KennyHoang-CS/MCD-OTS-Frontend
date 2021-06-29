import '../../css/UserUI.css';
import UserIcon from './UserIcon';

function UserBar() {

    let today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

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
                <p></p>
                <p>POS 27</p>
                <p>FC</p>
                <p></p>
                <p>Open</p>
            </div>
            </div>
        </div>
    )
}

export default UserBar;