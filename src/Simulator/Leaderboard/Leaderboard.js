import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LeaderboardRank from './LeaderboardRank';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// Handles displaying the leaderboard. 
export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);

    // Load in leaderboard from backend. 
    useEffect(() => {
        async function loadLeaderboard() {
            let getLeaderboardFromAPI = (await axios.get(`${BASE_URL}/leaderboard`)).data.items;
            setLeaderboard(getLeaderboardFromAPI);
        }
        loadLeaderboard(); 
    }, [])

    // Load in each user ranking as a row. 
    let displayLeaderboard = 
        leaderboard.map(
            (user, idx) => <LeaderboardRank 
                id={++idx}
                username={user.username} 
                formatted_time={user.formatted_time} 
            />);
    
    return (
        // Render the leaderboard with its rankings. 
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
