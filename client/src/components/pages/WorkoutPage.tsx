import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAllWorkouts } from '../../providers/slice/workout/WorkoutThunk';
import WorkoutCard from '../ui/WorkoutCard';
// import Timer from '../ui/Timer'; // Предполагается, что этот компонент отображает обратный отсчет

export default function WorkoutPage(): React.JSX.Element {
  const workouts = useAppSelector((state) => state.workout.workouts);
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    void dispatch(getAllWorkouts());
  }, [dispatch]);

  useEffect(() => {
    if (currentIndex < workouts.length) {
      const workout = workouts[currentIndex];
      setTimerDuration(3000); // Устанавливаем длительность таймера

      const workoutTime =3000; 
      const pauseTime = 1000; 

      const totalDuration = workoutTime + pauseTime;

      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, totalDuration);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, workouts]);

  if (isFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {currentIndex < workouts.length && (
          <div className="col-12">
            <WorkoutCard workout={workouts[currentIndex]} />
            {/* <Timer duration={timerDuration} /> Показываем таймер для текущего workout */}
          </div>
        )}
      </div>
    </div>
  );
}