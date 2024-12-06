import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAllWorkouts } from '../../providers/slice/workout/WorkoutThunk';
import { useParams } from 'react-router-dom';
// import Timer from '../ui/Timer'; // Предполагается, что этот компонент отображает обратный отсчет
export default function TreningPage(): React.JSX.Element {
  const trenings = useAppSelector((state) => state.workout.workouts); // Получаем массив упражнений из Redux-стора
  const { id } = useParams();
  const restId = id ? Number(id) : undefined;
  const workout = useAppSelector((state) => state.workout.workouts.find((el) => el.id === restId));
  const dispatch = useAppDispatch();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [timeRemaining, setTimeRemaining] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const workouts = useAppSelector((state) => state.workout.workouts);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

//   useEffect(() => {
//     if (currentIndex < workouts.length) {
//       const workout = workouts[currentIndex];
//       setTimerDuration(3000); // Устанавливаем длительность таймера

//       const workoutTime =3000; 
//       const pauseTime = 1000; 

//       const totalDuration = workoutTime + pauseTime;

//       const timer = setTimeout(() => {
//         setCurrentIndex(currentIndex + 1);
//       }, totalDuration);

//       return () => clearTimeout(timer);
//     } else {
//       setIsFinished(true);
//     }
//   }, [currentIndex, workouts]);

//   if (isFinished) {
//     return <div>Все тренировки завершены!</div>;
//   }

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
      setTimeRemaining(3000);
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
    // <div className="container">
    //   <div className="row">
    //     {currentIndex < workouts.length && (
    //       <div className="col-12">
    //         <WorkoutCard workout={workouts[currentIndex]} />
    //         {/* <Timer duration={timerDuration} /> Показываем таймер для текущего workout */}
    //       </div>
    //     )}
    //   </div>
    // <div className={styles.typeCard}>
  );
}


