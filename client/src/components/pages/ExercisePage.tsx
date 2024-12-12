import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useParams, useNavigate } from 'react-router-dom';
import ExerciseCard from '../ui/ExerciseCard';
import { styled } from '@mui/system';
import styles from '../css/Exercise.module.css';
import Timer from '../ui/Timer';
import { Button } from 'react-bootstrap';

const Container = styled('div')({
  marginBottom: '48px',
});

export default function ExercisePage(): React.JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const exerciseId = id ? Number(id) : undefined;
  const exercises = useAppSelector((state) =>
    state.exercise.exercises.filter((el) => el.workoutId === exerciseId),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [isTrainingStarted, setIsTrainingStarted] = useState(false); // Новое состояние для отслеживания начала тренировки

  useEffect(() => {
    if (isTrainingStarted && currentIndex < exercises.length) {
      const currentWorkout = exercises[currentIndex];
      const workoutTime = currentWorkout.time ? currentWorkout.time * 1000 : 0;
      const relaxTime = currentWorkout.relax ? currentWorkout.relax * 1000 : 0;

      setRemainingTime(isResting ? relaxTime : workoutTime); // Устанавливаем время в зависимости от состояния

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(interval);
            if (isResting) {
              setCurrentIndex((prevIndex) => prevIndex + 1); // Переходим к следующей тренировке
              setIsResting(false);
            } else {
              setIsResting(true); // Переходим в состояние отдыха
            }
            return 0; // Обнуляем время
          }
          return prevTime - 1000; // Уменьшаем оставшееся время на 1 секунду
        });
      }, 1000);

      return () => clearInterval(interval); // Очистка интервала при размонтировании
    }
    if (currentIndex >= exercises.length) {
      setIsWorkoutFinished(true);
    }
  }, [currentIndex, exercises.length, isResting, isTrainingStarted]); // Обратите внимание на зависимости

  const handleGoBack = (): void => {
    navigate(-1);
  };

  const startTraining = (): void => {
    setCurrentIndex(0);
    setIsWorkoutFinished(false);
    setIsResting(false); // Сбрасываем состояние отдыха
    setRemainingTime(0); // Сбрасываем оставшееся время
    setIsTrainingStarted(true); // Устанавливаем флаг начала тренировки
  };

  if (isWorkoutFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <Container>
      <div className={styles.row}>
        {isTrainingStarted && !isResting ? (
          <>
            <ExerciseCard exercise={exercises[currentIndex]} />
            <div className={styles.remainingTime}>{Math.ceil(remainingTime / 1000)}</div>
            <Button className={styles.button} onClick={handleGoBack}>
              Выйти
            </Button>
          </>
        ) : (
          <Timer isResting={isResting} remainingTime={remainingTime} />
        )}
        {!isTrainingStarted && (
          <Button className={styles.button} onClick={startTraining}>
            Начать тренировку
          </Button>
        )}
      </div>
    </Container>
  );
}
