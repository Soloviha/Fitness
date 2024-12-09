import React, { useState } from 'react';
import styles from '../css/ChatBot.module.css';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { sendMessage } from '../../providers/slice/chat/ChatThunk';

export default function ChatBot(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { messages, error } = useAppSelector((state) => state.chat);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      void dispatch(sendMessage(inputText)); // Отправляем сообщение через Redux
      setInputText('');
      setIsFirstMessage(false); // Отмечаем, что первое сообщение отправлено
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className={styles.chatbot_container}>
      <button className={styles.chatbot_button} onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className={styles.chatbot_window}>
          <div className={styles.chatbot_header}>
            <h2>Чат с ботом</h2>
            <button className={styles.close_button} onClick={toggleChat}>
              ✕
            </button>
          </div>
          <div className={styles.chatbot_messages}>
            {!isFirstMessage &&
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender === 'user' ? styles.user_message : styles.bot_message
                  }`}
                >
                  {message.text}
                </div>
              ))}
            {error && <div className={styles.error_message}>{error}</div>}
          </div>
          <div className={styles.chatbot_input}>
            <input
              type="text"
              placeholder="Введите ваше сообщение..."
              value={inputText}
              onChange={handleInputChange}
            />
            <button className={styles.send_button} onClick={handleSendMessage}>
              Отправить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}