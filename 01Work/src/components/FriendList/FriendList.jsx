import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return(
        <ul className={css.friendList}>
            {friends.map(
                ({id, name, avatar, isOnline}) => (
                    <FriendListItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
                )
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}