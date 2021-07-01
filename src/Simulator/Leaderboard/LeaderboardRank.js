import '../../css/Leaderboard.css';

// Handles displaying each user ranking. 
export default function LeaderboardRank({ id, username, formatted_time }) {

    return (
        // Return the render with ranking #, username, and their time. 
        <div className="Leaderboard-User">
            <p className="Leaderboard-Ranking">{id}</p>
            <p className="Leaderboard-Username">{username}</p>
            <p className="Leaderboard-Time">{formatted_time}</p>
        </div>
    )
}
