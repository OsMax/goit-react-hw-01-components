import './css/friend-list.css';

function status(isOnline) {
  return isOnline ? '#22ff55' : '#ff0000';
}

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span
            className="status"
            style={{ backgroundColor: status(friend.isOnline) }}
          ></span>
          <img className="avatar" src={friend.avatar} alt={friend.name} />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
