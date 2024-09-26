import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    const dynamicClassName = isOnline ? css.online :  css.offline;
    return(
        <li className={css.friendListItem}>
            <span className={dynamicClassName}></span>
            <img className={css.avatar} src={avatar} alt={name} width="40"/>
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}