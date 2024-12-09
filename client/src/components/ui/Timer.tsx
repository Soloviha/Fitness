import React, { useEffect, useState } from 'react';
import styles from '../css/Time.module.css';

export default function Timer({ isResting, remainingTime, exercise }: { isResting: boolean; remainingTime: number; exercise: any }): React.JSX.Element {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false); // Состояние для отслеживания окончания времени

  useEffect(() => {
    // Функция для обновления минут и секунд
    const updateTime = () => {
      const totalSeconds = Math.ceil(remainingTime / 1000); // переводим в секунды
      setMinutes(Math.floor(totalSeconds / 60)); // вычисляем минуты
      setSeconds(totalSeconds % 60); // вычисляем секунды

      if (totalSeconds <= 0) {
        setIsTimeUp(true); // Устанавливаем состояние, если время истекло
      }
    };

    updateTime(); // Обновляем время при первом рендере

    // Обновляем время каждый раз, когда изменяется remainingTime
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [remainingTime]);

  return (
    <div className={styles.countdown_timer}>
      <div className={styles.timer}>
        <span className={styles.time} id="minutes">{String(minutes).padStart(2, '0')}</span>:
        <span className={styles.time} id="seconds">{String(seconds).padStart(2, '0')}</span>
      </div>
      <div className={styles.label}>
        {isResting ? 'Осталось времени отдыха' : 'Осталось времени упражнения'}
      </div>
      {isTimeUp && (
        <div className={styles.time_up_message}>
          Время истекло!
        </div>
      )}
    </div>
  );
}
