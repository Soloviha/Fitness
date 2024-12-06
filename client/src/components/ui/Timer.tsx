import React, { useEffect, useState } from 'react'


type StopwatchProps {
    duration: number; // Длительность секундомера в секундах
  }

export default function Timer({ duration }: StopwatchProps): React.JSX.Element {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
      setTimeLeft(duration); // Обновляем timeLeft при изменении duration
    }, [duration]);
  
    useEffect(() => {
      if (timeLeft <= 0) return; // Завершаем, если время истекло
  
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0)); // Уменьшаем оставшееся время
      }, 1000);
  
      return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
    }, [timeLeft]);
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
  return (
    <div className="stopwatch">
    <h2>Оставшееся время: {formatTime(timeLeft)}</h2>
  </div>
  )
}
