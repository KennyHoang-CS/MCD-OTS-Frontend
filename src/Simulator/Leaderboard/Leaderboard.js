import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LeaderboardRank from './LeaderboardRank';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// Handles displaying the leaderboard. 
export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load in leaderboard from backend. 
    useEffect(() => {
        const source = axios.CancelToken.source();
        
        async function loadLeaderboard() {
            try {
                let getLeaderboardFromAPI = (await axios.get(`${BASE_URL}/leaderboard`, 
                                                { cancelToken: source.token })).data.items;
                setLeaderboard(getLeaderboardFromAPI);
                setLoading(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                } else {
                    throw new Error('Leaderboard Error...'); 
                }
            }
        }
        loadLeaderboard(); 
        
        return () => {
            source.cancel();
        }
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
            {loading ? 
                <p>Loading ...</p> 
                    : 
                    <div className="Leaderboard">
                        <div className="Leaderboard-Content">
                            <div className="Leaderboard-Headings">
                                <h2>Ranking</h2>
                                <h2>Username</h2>
                                <h2>Time Achieved</h2>
                            </div>
                            {displayLeaderboard}
                        </div>
                    </div>}
        </div>
    )
}
