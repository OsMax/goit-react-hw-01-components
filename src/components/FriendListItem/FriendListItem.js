import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function status(isOnline) {
  return isOnline ? '#22ff55' : '#ff0000';
}

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: status(isOnline) }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
