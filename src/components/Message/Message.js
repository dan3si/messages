import React from 'react';
import styles from './Message.module.scss';
import fAvatar from '../../images/f-avatar.png';
import mAvatar from '../../images/m-avatar.png';
import telegramIcon from '../../images/icons/telegram.png';
import viberIcon from '../../images/icons/viber.png';
import cn from 'classnames';

export const Message = ({
  firstName,
  lastName,
  phone,
  gender,
  text,
  messenger,
  time,
  date,
  read,
  clickHandler,
}) => {
  return (
    <div
      className={cn(styles.message, { [styles.readMessage]: read })}
      onClick={clickHandler}
    >
      <div className={styles.imagesWrapper}>
        <div className={styles.avatarWrapper}>
          <img
            src={gender === 'm' ? mAvatar : fAvatar}
            className={styles.avatar}
            alt="user avatar"
          />
        </div>
        <div className={styles.messengerWrapper}>
          <img
            src={messenger === 'telegram' ? telegramIcon : viberIcon}
            className={styles.messengerIcon}
            alt={`${messenger} icon`}
          />
        </div>
      </div>

      <div className={styles.senderInfo}>
        <div className={styles.senderName}>
          {firstName} {lastName}
        </div>
        <div className={styles.senderPhone}>
          {phone}
        </div>
      </div>

      <p className={styles.text}>{text}</p>

      <div className={styles.time}>{time}</div>

      <div className={styles.date}>{date}</div>
    </div>  
  );
}
