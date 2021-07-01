import '../../css/Leaderboard.css';

export default function LeaderboardRank({ id, username, formatted_time }) {

    return (
        <div className="Leaderboard-User">
            <p className="Leaderboard-Ranking">{id}</p>
            <p className="Leaderboard-Username">{username}</p>
            <p className="Leaderboard-Time">{formatted_time}</p>
        </div>
    )
}
