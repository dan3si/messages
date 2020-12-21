import React from 'react';
import styles from './MessagesHeader.module.scss';

export const MessagesHeader = ({ total, unread, refresh }) => {
  return (
    <div className={styles.header}>
      <button
        className={styles.refresh}
        onClick={refresh}
      />

      <span className={styles.total}>Повiдомлень - {total}</span>

      <span className={styles.unread}>Непрочитаних - {unread}</span>
    </div>  
  );
}
