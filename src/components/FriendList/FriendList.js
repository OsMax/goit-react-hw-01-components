import css from './friend-list.module.css';

function status(isOnline) {
  return isOnline ? '#22ff55' : '#ff0000';
}

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={css.status}
            style={{ backgroundColor: status(friend.isOnline) }}
          ></span>
          <img className={css.avatar} src={friend.avatar} alt={friend.name} />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
