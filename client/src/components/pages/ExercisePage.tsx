import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useParams, useNavigate } from 'react-router-dom';
import ExerciseCard from '../ui/ExerciseCard';
import { styled } from '@mui/system';
import styles from '../css/Exercise.module.css';
import Timer from '../ui/Timer';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Container = styled('div')({});

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
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);

  useEffect(() => {
    if (isTrainingStarted && currentIndex < exercises.length) {
      const currentWorkout = exercises[currentIndex];
      const workoutTime = currentWorkout.time ? currentWorkout.time * 1000 : 0;
      const relaxTime = currentWorkout.relax ? currentWorkout.relax * 1000 : 0;

      setRemainingTime(isResting ? relaxTime : workoutTime);

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(interval);
            if (isResting) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              setIsResting(false);
            } else {
              setIsResting(true);
            }
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
    if (currentIndex >= exercises.length) {
      setIsWorkoutFinished(true);
    }
  }, [currentIndex, exercises.length, isResting, isTrainingStarted]);

  const handleGoBack = (): void => {
    navigate(-1);
  };

  const startTraining = (): void => {
    setCurrentIndex(0);
    setIsWorkoutFinished(false);
    setIsResting(false);
    setRemainingTime(0);
    setIsTrainingStarted(true);
  };

  if (isWorkoutFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    <Container>
      <div className={styles.ocb}>
        <div className={styles.row}>
          {isTrainingStarted && !isResting ? (
            <>
              <ExerciseCard exercise={exercises[currentIndex]} />
              <div className={styles.remainingTime}>{Math.ceil(remainingTime / 1000)}</div>
              <Button className={styles.buttonB} onClick={handleGoBack}>
                Завершить
              </Button>
            </>
          ) : (
            <Timer isResting={isResting} remainingTime={remainingTime} />
          )}
          {!isTrainingStarted && (
            <Button className={styles.button} onClick={startTraining}>
             <FontAwesomeIcon icon={faPlay} />
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
