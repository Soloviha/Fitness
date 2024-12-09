import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useParams } from 'react-router-dom';
import ExerciseCard from '../ui/ExerciseCard';

export default function ExercisePage(): React.JSX.Element {

  const { id } = useParams();
  const exerciseId = id ? Number(id) : undefined;
  const exercises = useAppSelector((state) =>
    state.exercise.exercises.filter((el) => el.workoutId === exerciseId),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isResting, setIsResting] = useState(false); // Состояние для отслеживания отдыха

  useEffect(() => {
    if (currentIndex < exercises.length) {
      const currentWorkout = exercises[currentIndex];
      setShowCard(true); // Показываем карточку

      const workoutTime = currentWorkout.time * 1000; // переводим в миллисекунды
      const relaxTime = currentWorkout.relax * 1000; // переводим в миллисекунды

      setRemainingTime(workoutTime); // Устанавливаем оставшееся время на тренировку

      const workoutInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(workoutInterval); // Очищаем интервал, когда время истекает
            setShowCard(false); // Скрываем карточку после завершения
            setIsResting(true); // Устанавливаем состояние отдыха
            setRemainingTime(relaxTime); // Устанавливаем оставшееся время на отдых

            const relaxInterval = setInterval(() => {
              setRemainingTime((prevRelaxTime) => {
                if (prevRelaxTime <= 1000) {
                  clearInterval(relaxInterval); // Очищаем интервал отдыха
                  setIsResting(false); // Сбрасываем состояние отдыха
                  setCurrentIndex((prevIndex) => prevIndex + 1); // Переходим к следующей карточке
                  return 0; // Возвращаем 0, чтобы не было отрицательного времени
                }
                return prevRelaxTime - 1000; // Уменьшаем оставшееся время на 1 секунду
              });
            }, 1000); // Обновляем каждую секунду для отдыха

            return 0; // Возвращаем 0 для тренировки
          }
          return prevTime - 1000; // Уменьшаем оставшееся время на 1 секунду
        });
      }, 1000); // Обновляем каждую секунду для тренировки

      return () => {
        clearInterval(workoutInterval); // Очистка интервала при размонтировании
      };
    } 
      setIsWorkoutFinished(true); // Устанавливаем состояние завершенности
    
  }, [currentIndex]);

  if (isWorkoutFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <div className="container">
      {showCard && (
        <div className="row">
          <div className="col-12">
            <ExerciseCard exercise={exercises[currentIndex]} />
            <div>
              Оставшееся время: {Math.ceil(remainingTime / 1000)} секунд
            </div>
            {isResting && <div > Оставшееся время отдыха: {Math.ceil(remainingTime / 1000)} секунд</div>}
          </div>
        </div>
      )}
    </div>
  );
}

