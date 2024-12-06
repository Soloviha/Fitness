import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useParams } from 'react-router-dom';
import TreningCard from '../ui/TreningCard';
// import Timer from '../ui/Timer'; // Предполагается, что этот компонент отображает обратный отсчет

export default function TreningPage(): React.JSX.Element {
  const { id } = useParams();
  const treningId = id ? Number(id) : undefined;
  const trenings = useAppSelector((state) =>
    state.exercise.exercises.filter((el) => el.workoutId === treningId),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRelaxing, setIsRelaxing] = useState(false);

  useEffect(() => {
    if (currentIndex < trenings.length) {
      const trening = trenings[currentIndex];
      setTimeLeft(trening.time); // Устанавливаем время для текущей тренировки

      // Обратный отсчет для текущей тренировки
      const countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsRelaxing(true); // Переход к отдыху
            return 0; // Обнуляем оставшееся время
          }
          return prev - 1; // Уменьшаем оставшееся время
        });
      }, 1000);

      return () => clearInterval(countdown); // Очищаем интервал при размонтировании
    } 
      setIsFinished(true); // Устанавливаем флаг завершения, если все тренировки закончены
    
  }, [currentIndex, trenings]);

  useEffect(() => {
    if (isRelaxing && currentIndex < trenings.length) {
      const trening = trenings[currentIndex];
      setTimeLeft(trening.relax); // Устанавливаем время отдыха

      // Обратный отсчет для отдыха
      const relaxCountdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(relaxCountdown);
            setIsRelaxing(false); // Завершаем отдых
            setCurrentIndex((prevIndex) => prevIndex + 1); // Переход к следующей тренировке
            return 0; // Обнуляем оставшееся время
          }
          return prev - 1; // Уменьшаем оставшееся время
        });
      }, 1000);

      return () => clearInterval(relaxCountdown); // Очищаем интервал при размонтировании
    }
  }, [isRelaxing, currentIndex, trenings]);

  if (isFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {currentIndex < trenings.length && (
          <div className="col-12">
            <TreningCard trening={trenings[currentIndex]} />
            {/* <Timer duration={timeLeft} /> Показываем таймер для текущего workout или отдыха */}
          </div>
        )}
      </div>
    </div>
  );
}


