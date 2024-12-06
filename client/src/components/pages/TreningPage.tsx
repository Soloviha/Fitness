import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAllWorkouts } from '../../providers/slice/workout/WorkoutThunk';

export default  function TreningPage() {
  const trenings = useAppSelector((state) => state.workout.workouts); // Получаем массив упражнений из Redux-стора
  const dispatch = useAppDispatch();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    void dispatch(getAllWorkouts());
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (currentExerciseIndex < trenings.length) {
      const currentExercise = trenings[currentExerciseIndex];

      // Показываем информацию об упражнении
      console.log(`Упражнение: ${currentExercise.exOne}`);
      console.log(`Описание: ${currentExercise.descOne}`);
      console.log(`Время: 10 секунд`);

      // Запускаем обратный отсчет времени
      setTimeRemaining(5000);
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(interval);

      // Ждем указанное время для выполнения упражнения
      setTimeout(() => {
        console.log(`Отдых: 10 секунд`);

        // Ждем указанное время для отдыха
        setTimeout(() => {
          // Повторяем упражнение, если необходимо
          for (let i = 1; i < 15; i++) {
            console.log(`Повторение ${i + 1} из 15`);

            // Ждем указанное время для выполнения упражнения
            setTimeout(() => {
              // Ждем указанное время для отдыха
              setTimeout(() => {
                setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
              }, 10 * 1000);
            }, 10 * 1000);
          }

          setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
        }, 10 * 1000);
      }, 10 * 1000);
    } else {
      setIsFinished(true);
      console.log('Тренировка завершена!');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentExerciseIndex, trenings]);

  useEffect(() => {
    if (timeRemaining === 0) {
      clearInterval(intervalId);
    }
  }, [timeRemaining, intervalId]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isFinished) {
    return <div>Тренировка завершена!</div>;
  }

  return (
    <div>
      {trenings.length > 0 && (
        <div>
          <h2>{trenings[currentExerciseIndex].exOne}</h2>
          <p>{trenings[currentExerciseIndex].descOne}</p>
          <p>Время: {timeRemaining} секунд</p>
        </div>
      )}
    </div>
  );
}


