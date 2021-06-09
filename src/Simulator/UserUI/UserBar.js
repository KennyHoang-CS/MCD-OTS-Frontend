import '../../css/UserUI.css';
import UserIcon from './UserIcon';

function UserBar() {

    return (
        <div className="User-Bar-Container">
            <div className="User-Content">
                <p className="User-Logged">User Logged</p>
                <UserIcon />
            </div>
            <div>
            <div className="User-Top">
                <p>00:00</p>
                <p className="User-Top-White-Box"></p>
                <p>Kenny Hoang</p>
                <p>06/08/2021 19:50:47</p>
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