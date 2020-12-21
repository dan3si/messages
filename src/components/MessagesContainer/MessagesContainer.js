import React, { useState } from 'react';
import { MessagesHeader } from '../MessagesHeader';
import { Message } from '../Message';
import loadedMessages from '../../messages/messages.json';
import styles from './MessagesContainer.module.scss';

export const MessagesContainer = () => {
  const [messages, setMessages] = useState(loadedMessages);

  messages.sort((a, b) => {
    if (!a.read && b.read) {
      return -1;
    } else if (a.read && !b.read) {
      return 1;
    } else {
      const dateArgumentsA = [...a.date.split('.').reverse(), ...a.time.split(':')];
      const dateArgumentsB = [...b.date.split('.').reverse(), ...b.time.split(':')];

      return Date.UTC(...dateArgumentsB) - Date.UTC(...dateArgumentsA);
    }
  });

  return (
    <div>
      <MessagesHeader
        total={messages.length}
        unread={messages.filter(mes => !mes.read).length}
        refresh={() => setMessages(loadedMessages)}
      />

      {messages.length
        ? (
          <div className={styles.messagesWrapper}>
            {messages.map(
              message => (
                <Message
                  key={message.id}
                  {...message}
                  clickHandler={() => {
                    if (message.read) {
                      setMessages(
                        messages.filter(
                          current => current.id !== message.id
                        )
                      );
                    } else {
                      setMessages(
                        messages.map(
                          current => current.id === message.id
                            ? { ...current, read: true }
                            : current
                        )
                      );
                    }
                  }}
                />
              )
            )}
          </div>
        )
        : (
          <div className={styles.noMessages}>
            There are no messages!
          </div>
        )
      }
      
    </div>
  );
}
