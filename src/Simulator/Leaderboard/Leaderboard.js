import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LeaderboardRank from './LeaderboardRank';
import axios from 'axios';


const BASE_URL = 'http://localhost:3001';

export default function Leaderboard() {

    const dispatch = useDispatch(); 

    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        
        async function loadLeaderboard() {
            let getLeaderboardFromAPI = (await axios.get(`${BASE_URL}/leaderboard`)).data.items;
            setLeaderboard(getLeaderboardFromAPI);
        }
        loadLeaderboard(); 
    
        //dispatch(updateLeaderboard());

    }, [])

    let displayLeaderboard = 
        leaderboard.map(
            (user, idx) => <LeaderboardRank 
                id={++idx}
                username={user.username} 
                formatted_time={user.formatted_time} 
            />);
    
    return (
        <div className="Leaderboard-Container">
            <NavLink to="/">Go Back</NavLink>
            <h1>McDonalds OTS Leaderboards</h1>
            <div className="Leaderboard">
                <div className="Leaderboard-Content">
                    <div className="Leaderboard-Headings">
                        <h2>Ranking</h2>
                        <h2>Username</h2>
                        <h2>Time Achieved</h2>
                    </div>
                    {displayLeaderboard}
                </div>
            </div>
        </div>
    )
}

//{leaderboard && leaderboard.map(user => <p>{user.username}</p>)}