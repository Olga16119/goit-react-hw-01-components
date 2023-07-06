import React from "react";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    const status = isOnline ? `online` : `ofline`;
    return(
 <li className={css.item}>
            <span className={css.status}>{ status}</span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name }</p>
</li>)
}


FriendListItem.protoTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}


