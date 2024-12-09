import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import Popa from './Popa';
import { getAllExercises } from '../../providers/slice/exercise/ExerciseThunk';

export default function TreningTime(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const trenings = useAppSelector((state) => state.exercise.exercises);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    void dispatch(getAllExercises());
  }, [dispatch]);

  useEffect(() => {
    if (currentIndex < trenings.length) {
      const currentWorkout = trenings[currentIndex];
      setShowCard(true);

      const workoutTime = currentWorkout.time * 1000;
      const relaxTime = currentWorkout.relax * 1000;

      setRemainingTime(workoutTime);

      const workoutInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(workoutInterval);
            setShowCard(false);
            setIsResting(true);
            setRemainingTime(relaxTime);

            const relaxInterval = setInterval(() => {
              setRemainingTime((prevRelaxTime) => {
                if (prevRelaxTime <= 1000) {
                  clearInterval(relaxInterval);
                  setIsResting(false);
                  setCurrentIndex((prevIndex) => prevIndex + 1);
                  return 0;
                }
                return prevRelaxTime - 1000;
              });
            }, 1000);

            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => {
        clearInterval(workoutInterval);
      };
    }
    setIsWorkoutFinished(true);
  }, [currentIndex, trenings]);

  if (isWorkoutFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <div className="container">
      {showCard && (
        <div className="row">
          <div className="col-12">
            <Popa workout={trenings[currentIndex]} />
            <div>Оставшееся время: {Math.ceil(remainingTime / 1000)} секунд</div>
            {isResting && (
              <div> Оставшееся время отдыха: {Math.ceil(remainingTime / 1000)} секунд</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

