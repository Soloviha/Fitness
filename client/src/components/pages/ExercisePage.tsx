import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useParams, useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import ExerciseCard from '../ui/ExerciseCard';
import { styled } from '@mui/system';
import styles from '../css/Exercise.module.css';
import Timer from '../ui/Timer';
import { Button } from 'react-bootstrap';

const Container = styled('div')({
  marginBottom: '48px',
});

// const RemainingTimeContainer = styled('div')({
//   marginTop: '-800px',
//   padding: '10px 20px',
//   fontSize: '95px',
//   width: '600px',
//   marginLeft: '120px',
//   color: '#fff',
// });
// const RemainingTimeContainer = styled('div')({
//   padding: '10px 20px',
//   fontSize: '95px',
//   width: '600px',
//   marginLeft: '215px',
//   color: '#fff',
//   marginTop: '600px',
// });

// const Button = styled('button')({
//   marginTop: '-100px',
//   padding: '10px 20px',
//   fontSize: '17px',
//   height: '70px',
//   width: '200px',
//   marginLeft: '600px',
//   // cursor: 'pointer',
//   color: '#fff',
//   zIndex: '1000'
// });

export default function ExercisePage(): React.JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate(); // Создаем навигатор
  const exerciseId = id ? Number(id) : undefined;
  const exercises = useAppSelector((state) =>
    state.exercise.exercises.filter((el) => el.workoutId === exerciseId),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    if (currentIndex < exercises.length) {
      const currentWorkout = exercises[currentIndex];
      const workoutTime = currentWorkout.time ? currentWorkout.time * 1000 : 0; // переводим в миллисекунды
      const relaxTime = currentWorkout.relax ? currentWorkout.relax * 1000 : 0; // переводим в миллисекунды

      setRemainingTime(workoutTime); // Устанавливаем оставшееся время на тренировку

      const workoutInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(workoutInterval);
            setIsResting(true); // Устанавливаем состояние отдыха
            setRemainingTime(relaxTime); // Устанавливаем оставшееся время на отдых

            const relaxInterval = setInterval(() => {
              setRemainingTime((prevRelaxTime) => {
                if (prevRelaxTime <= 1000) {
                  clearInterval(relaxInterval);
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

  const handleGoBack = (): void => {
    navigate(-1); // Возвращаемся на предыдущую страницу
  };

  if (isWorkoutFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <Container>
      <div className={styles.row}>
        {!isResting ? (
          <>
            <ExerciseCard exercise={exercises[currentIndex]} />
            <div className={styles.remainingTime}>{Math.ceil(remainingTime / 1000)}</div>
            <Button className={styles.button} onClick={handleGoBack}>
              Завершить тренировку
            </Button>
          </>
        ) : (
          <Timer isResting={isResting} remainingTime={remainingTime} />
        )}
      </div>
    </Container>
  );
}
