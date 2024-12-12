import React, { useState, useRef, useEffect } from 'react';
import styles from '../css/ChatBot.module.css';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { sendMessage } from '../../providers/slice/chat/ChatThunk';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function ChatBot(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { messages, error } = useAppSelector((state) => state.chat);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      void dispatch(sendMessage(inputText)); // Отправляем сообщение через Redux
      setInputText('');
      setIsFirstMessage(false); // Отмечаем, что первое сообщение отправлено
      setScrollPosition(chatMessagesRef.current?.scrollHeight || 0);
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0 && messages.length > 4) {
      // Пользователь прокрутил вверх, показываем предыдущие сообщения
      setScrollPosition(e.currentTarget.scrollTop);
    } else {
      setScrollPosition(e.currentTarget.scrollTop);
    }
  };

  return (
    <div className={styles.chatbot_container}>
      <button className={styles.chatbot_button} onClick={toggleChat}>
        <QuestionAnswerIcon />
      </button>
      {isOpen && (
        <div className={styles.chatbot_window} style={{ height: '500px' }}>
          <div className={styles.chatbot_header}>
            <h5>Онлайн-помощник</h5>
            <button className={styles.close_button} onClick={toggleChat}>
              <CloseIcon />
            </button>
          </div>
          <div
            className={styles.chatbot_messages}
            ref={chatMessagesRef}
            onScroll={handleScroll}
            style={{
              overflowY: 'auto',
              maxHeight: '500px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`${styles.message} ${index % 2 === 0 ? styles.user_message : styles.bot_message}`}
                style={{
                  top: `${index * 50}px`, // Устанавливаем вертикальное положение сообщения
                  marginBottom: '20px',
                }}
              >
                {message.text}
              </div>
            ))}
            {error && <div className={styles.error_message}>{error}</div>}
          </div>
          <div className={styles.chatbot_input}>
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyPress}
            />
            <button className={styles.send_button} onClick={handleSendMessage}>
              <TelegramIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
