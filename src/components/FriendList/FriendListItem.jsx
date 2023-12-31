import React from "react";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return(
          <li className={css.item}>
            <span className={isOnline?css.statusOnline: css.statusOfline}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name }</p>
</li>)
}

FriendListItem.protoTypes = {
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}


